"use client";

import { createContext, useContext, useState } from "react";

const gridViewContext = createContext();

function GridViewProvider({ children }) {
  const [columnsNo, setColumnsNo] = useState(3);

  return (
    <gridViewContext.Provider value={{ columnsNo, setColumnsNo }}>
      {children}
    </gridViewContext.Provider>
  );
}

function useGridView() {
  const context = useContext(gridViewContext);

  if (context === undefined) {
    throw new Error("Context was used out of provider");
  }

  return context;
}

export { GridViewProvider, useGridView };
