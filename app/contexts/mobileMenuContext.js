"use client";

import { createContext, useContext, useState } from "react";

const moblieMenuContext = createContext();

function MobileMenuProvider({ children }) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <moblieMenuContext.Provider value={{ isOpenMenu, setIsOpenMenu }}>
      {children}
    </moblieMenuContext.Provider>
  );
}

function useMobileMenu() {
  const context = useContext(moblieMenuContext);

  if (context === undefined) {
    throw new Error("Context was used out of provider");
  }

  return context;
}

export { MobileMenuProvider, useMobileMenu };
