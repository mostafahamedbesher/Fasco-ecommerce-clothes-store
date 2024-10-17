import { MobileMenuProvider } from "../contexts/mobileMenuContext";
import ButtonMenu from "./ButtonMenu";
import { HiListBullet } from "react-icons/hi2";
import UserNavigationList from "./UserNavigationList";

// import { FaBoxOpen } from "react-icons/fa";
// import { IoHome } from "react-icons/io5";

function UserSideNavigation() {
  return (
    <nav className="border-r-2 border-primary-2 max-xl:border-none">
      {/* will appear on mobile devices only */}
      <MobileMenuProvider>
        <ButtonMenu
          margin="mb-6 -ml-10 max-md:-ml-8 max-sm:-ml-6 max-sm-l:-ml-3"
          border="border-2 border-l-0 rounded-r-md"
          padding="p-1"
        >
          <HiListBullet className="h-8 w-8" />
        </ButtonMenu>

        <UserNavigationList />
      </MobileMenuProvider>
    </nav>
  );
}

export default UserSideNavigation;
