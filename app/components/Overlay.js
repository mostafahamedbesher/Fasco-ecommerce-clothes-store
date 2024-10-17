"use client";

function Overlay({ isOpenMenu, setIsOpenMenu }) {
  function handleClick() {
    setIsOpenMenu(false);
  }

  return (
    <div
      onClick={handleClick}
      className={`max-lg:fixed max-lg:left-0 max-lg:top-0 max-lg:z-[1000] max-lg:h-[100vh] max-lg:w-[100vw] max-lg:items-center max-lg:justify-center max-lg:bg-black max-lg:bg-opacity-70 max-lg:transition-all ${isOpenMenu ? "fixed" : "hidden"}`}
    ></div>
  );
}

export default Overlay;
