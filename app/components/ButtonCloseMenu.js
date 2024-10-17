"use client";

import { HiOutlineXMark } from "react-icons/hi2";

function ButtonCloseMenu({ setIsOpenMenu }) {
  function handleClick() {
    setIsOpenMenu(false);
  }

  return (
    <button
      className="mr-3 block rounded-sm bg-primary-2 p-1"
      onClick={handleClick}
    >
      <HiOutlineXMark className="h-6 w-6" />
    </button>
  );
}

export default ButtonCloseMenu;
