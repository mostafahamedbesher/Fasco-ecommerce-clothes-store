"use client";

import Link from "next/link";
import { HiOutlineTruck } from "react-icons/hi2";
import { HiOutlineHome } from "react-icons/hi2";
import SignoutButton from "./SignoutButton";
import { useMobileMenu } from "../contexts/mobileMenuContext";
import { usePathname } from "next/navigation";
import ButtonCloseMenu from "./ButtonCloseMenu";

const navLinks = [
  {
    name: "Home",
    href: "/user",
    icon: <HiOutlineHome className="h-7 w-7" />,
  },
  {
    name: "Orders",
    href: "/user/orders",
    icon: <HiOutlineTruck className="h-7 w-7" />,
  },
];

function UserNavigationList() {
  const path = usePathname();
  const { isOpenMenu, setIsOpenMenu } = useMobileMenu();

  return (
    <ul
      className={`mobile-overlay-list flex h-[70dvh] list-none flex-col gap-4 border-b-2 max-xl:border-none max-lg:h-[100dvh] ${isOpenMenu ? "max-lg:menu-slideIn max-lg:flex" : "max-lg:pointer-events-none max-lg:invisible max-lg:translate-x-[-100%] max-lg:opacity-0 max-lg:transition-all max-lg:duration-500"}`}
    >
      {/* will appear on mobile devices only */}
      <div className="hidden items-center justify-between max-lg:mb-4 max-lg:flex">
        <h2 className="text-xl font-semibold tracking-wider">User Menu</h2>
        <ButtonCloseMenu setIsOpenMenu={setIsOpenMenu} />
      </div>

      {navLinks.map((navItem) => (
        <li key={navItem.name}>
          <Link
            href={navItem.href}
            className={`flex items-end gap-3 px-6 py-3 hover:bg-primary-2 max-xl:px-3 ${
              path === navItem.href ? "bg-primary-2" : ""
            }`}
          >
            {navItem.icon}
            <span className="text-base font-medium">{navItem.name}</span>
          </Link>
        </li>
      ))}

      <li className="mt-auto hover:bg-primary-2">
        <SignoutButton border={false} padding="py-3 px-6 max-lg:px-3" />
      </li>
    </ul>
  );
}

export default UserNavigationList;
