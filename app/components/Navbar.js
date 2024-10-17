import { auth } from "../lib/auth";
import { getItemsWishlistbyUserId } from "../lib/data-service";
import Logo from "./Logo";
import NavIcons from "./NavIcons";
import Navlist from "./Navlist";
import ButtonMenu from "./ButtonMenu";
import { MobileMenuProvider } from "../contexts/mobileMenuContext";
import { HiBars3 } from "react-icons/hi2";

async function Navbar() {
  const session = await auth();
  let wishlist;

  if (session) {
    wishlist = await getItemsWishlistbyUserId(session?.user.userId);
  }

  return (
    <nav className="mb-20 mt-2 flex items-center justify-between border-b pb-8 max-lg:mb-16 max-lg:pb-6">
      <MobileMenuProvider>
        {/* will appear only in mobile devices */}
        <ButtonMenu>
          <HiBars3 className="max-sm-l:h-8 max-sm-l:w-8 h-10 w-10 max-sm:h-9 max-sm:w-9" />
        </ButtonMenu>

        <Logo />
        <Navlist session={session} />
        <NavIcons session={session} wishlist={wishlist} />
      </MobileMenuProvider>
    </nav>
  );
}

export default Navbar;
