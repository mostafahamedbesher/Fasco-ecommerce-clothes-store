import UserSideNavigation from "../components/UserSideNavigation";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-[1fr_3fr] max-xl:grid-cols-[1.25fr_4fr] max-lg:grid-cols-1">
      <UserSideNavigation />
      <main className="pl-12 max-xl:pl-6 max-lg:pl-0">{children}</main>
    </div>
  );
}
