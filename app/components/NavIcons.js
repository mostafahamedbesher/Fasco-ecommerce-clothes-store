"use client";

import Link from "next/link";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineStar } from "react-icons/hi2";
import { useCart } from "../contexts/cartContext";
import { usePathname } from "next/navigation";

function NavIcons({ session, wishlist }) {
  const { cart } = useCart();
  const path = usePathname();
  const userFirstName = session?.user?.name.split(" ").at(0);

  return (
    <ul className="max-sm-l:gap-4 flex list-none items-center justify-center gap-6">
      {session?.user && (
        <li>
          <span className="rounded-md bg-primary-2 p-1 text-sm font-semibold max-lg:hidden max-lg:text-xs">
            welcome, {userFirstName}
          </span>
        </li>
      )}
      <li
        className={`${
          path === "/cart"
            ? "rounded-md border-2 border-black p-1 transition-all duration-100"
            : ""
        } relative`}
      >
        <Link href="/cart">
          <HiOutlineShoppingCart className="h-6 w-6" />
          {cart.length > 0 && (
            <span className="absolute right-[-5px] top-[-5px] flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-center text-[10px] font-semibold text-primary">
              {cart.length}
            </span>
          )}
        </Link>
      </li>

      <li
        className={`${
          path.startsWith("/user")
            ? "rounded-md border-2 border-black p-1 transition-all duration-100"
            : ""
        }`}
      >
        <Link href="/user">
          <HiOutlineUser className="h-6 w-6" />
        </Link>
      </li>

      <li
        className={`${
          path === "/wishlist"
            ? "rounded-md border-2 border-black p-1 transition-all duration-100"
            : ""
        } relative`}
      >
        <Link href="/wishlist">
          <HiOutlineStar className="h-6 w-6" />
          {wishlist?.length > 0 && session && (
            <span className="absolute right-[-5px] top-[-5px] flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-center text-[10px] font-semibold text-primary">
              {wishlist.length}
            </span>
          )}
        </Link>
      </li>
    </ul>
  );
}

export default NavIcons;

// return (
//   <ul className="list-none flex items-center justify-center gap-6">
//     <li
//       className={`${
//         activeLink === "cart" || path === "/cart"
//           ? "border-2 border-black rounded-md p-1 transition-all duration-100"
//           : ""
//       } relative`}
//       // onClick={() => setActiveLink("cart")}
//     >
//       <Link href="/cart">
//         <HiOutlineShoppingCart className="w-6 h-6" />
//         {cart.length > 0 && (
//           <span className="absolute top-[-5px] right-[-5px] flex items-center justify-center w-4 h-4 text-center font-semibold text-[10px] text-primary bg-red-600 rounded-full">
//             {cart.length}
//           </span>
//         )}
//       </Link>
//     </li>

//     <li
//       className={`${
//         activeLink === "user" || path === "/user"
//           ? "border-2 border-black rounded-md p-1 transition-all duration-100"
//           : ""
//       }`}
//       // onClick={() => setActiveLink("user")}
//     >
//       <Link href="/user">
//         <HiOutlineUser className="w-6 h-6" />
//       </Link>
//     </li>

//     <li
//       className={`${
//         activeLink === "wishlist" || path === "/wishlist"
//           ? "border-2 border-black rounded-md p-1 transition-all duration-100"
//           : ""
//       }`}
//       // onClick={() => setActiveLink("wishlist")}
//     >
//       <Link href="/wishlist">
//         <HiOutlineStar className="w-6 h-6" />
//       </Link>
//     </li>
//   </ul>
// );
