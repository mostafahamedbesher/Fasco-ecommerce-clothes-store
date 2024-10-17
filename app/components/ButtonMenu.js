"use client";

import Overlay from "./Overlay";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useMobileMenu } from "../contexts/mobileMenuContext";

function ButtonMenu({ children, margin, border, padding }) {
  const path = usePathname();
  const { isOpenMenu, setIsOpenMenu } = useMobileMenu();

  useEffect(
    function () {
      setIsOpenMenu(false);
    },
    [path],
  );

  function handleClick() {
    setIsOpenMenu(true);
  }

  return (
    <>
      <button
        className={`hidden max-lg:block ${margin ? margin : ""} ${border ? border : ""} ${padding ? padding : ""}`}
        onClick={handleClick}
      >
        {children}
      </button>

      <Overlay isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
    </>
  );
}

export default ButtonMenu;
