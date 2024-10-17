"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMobileMenu } from "../contexts/mobileMenuContext";
import ButtonCloseMenu from "./ButtonCloseMenu";

function Navlist({ session }) {
  const path = usePathname();
  const { isOpenMenu, setIsOpenMenu } = useMobileMenu();
  const userFirstName = session?.user?.name.split(" ").at(0);

  // console.log(path);

  return (
    <ul
      className={`mobile-overlay-list flex list-none items-center justify-center gap-12 max-lg:flex-col max-lg:items-start max-lg:justify-start max-lg:gap-8 ${isOpenMenu ? "max-lg:menu-slideIn max-lg:flex" : "max-lg:pointer-events-none max-lg:invisible max-lg:translate-x-[-100%] max-lg:opacity-0 max-lg:transition-all max-lg:duration-500"}`}
    >
      <div className="hidden max-lg:block max-lg:w-full">
        <div className="hidden max-lg:flex max-lg:w-full max-lg:items-center max-lg:justify-between">
          <h3 className="text-lg font-semibold text-secondary">Menu</h3>
          <ButtonCloseMenu setIsOpenMenu={setIsOpenMenu} />
        </div>

        {session?.user && (
          <span className="mt-3 inline-block rounded-md bg-primary-2 px-3 py-1 text-sm font-semibold">
            welcome, {userFirstName}
          </span>
        )}
      </div>

      <li
        className={`max-lg:w-full max-lg:border-b max-lg:border-primary-2 max-lg:pb-2 ${path === "/" ? "nav-link-selected" : ""}`}
      >
        <Link href="/" className="max-lg:block max-lg:w-full">
          Home
        </Link>
      </li>

      <li
        className={`max-lg:w-full max-lg:border-b max-lg:border-primary-2 max-lg:pb-2 ${path === "/deals" ? "nav-link-selected" : ""}`}
      >
        <Link href="/deals" className="max-lg:block max-lg:w-full">
          Deals
        </Link>
      </li>

      <li
        className={`max-lg:w-full max-lg:border-b max-lg:border-primary-2 max-lg:pb-2 ${path === "/products" ? "nav-link-selected" : ""}`}
      >
        <Link href="/products" className="max-lg:block max-lg:w-full">
          Products
        </Link>
      </li>

      <li
        className={`max-lg:w-full max-lg:border-b max-lg:border-primary-2 max-lg:pb-2 ${path === "/signin" ? "nav-link-selected" : ""}`}
      >
        <Link href="/signin" className="max-lg:block max-lg:w-full">
          {!session?.user ? "Sign in" : "Sign out"}
        </Link>
      </li>
    </ul>
  );
}

export default Navlist;
