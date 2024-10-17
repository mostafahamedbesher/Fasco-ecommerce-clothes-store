"use client";

import { useModal } from "../contexts/ModalContext";

function ModalWindow({ children, openId }) {
  const { windowOpenId } = useModal();

  if (windowOpenId !== openId) {
    return null;
  }

  return (
    <div className="fixed left-0 top-0 z-[1000] flex h-[100vh] w-[100vw] items-center justify-center bg-white bg-opacity-10 backdrop-blur-sm transition-all">
      {children}
    </div>
  );
}

export default ModalWindow;
