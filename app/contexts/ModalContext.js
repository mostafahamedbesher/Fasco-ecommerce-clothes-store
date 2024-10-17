"use client";
import { useState, createContext, useContext } from "react";

const ModalContext = createContext();

function ModalProvider({ children }) {
  const [windowOpenId, setWindowOpenId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const openWindow = setWindowOpenId;
  const closeWindow = () => setWindowOpenId(null);

  return (
    <ModalContext.Provider
      value={{ windowOpenId, openWindow, closeWindow, isLoading, setIsLoading }}
    >
      {children}
    </ModalContext.Provider>
  );
}

function useModal() {
  const context = useContext(ModalContext);

  if (context === undefined)
    throw new Error("Context was used out of Provider");

  return context;
}

export { ModalProvider, useModal };
