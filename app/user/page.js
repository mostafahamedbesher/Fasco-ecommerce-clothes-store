import { auth } from "../lib/auth";
import { IoInformationCircleOutline } from "react-icons/io5";

async function page() {
  const session = await auth();

  return (
    <div className="flex flex-col gap-10">
      <p className="text-2xl font-medium max-xl:text-xl">
        Welcome, <span className="font-semibold">{session.user.name}</span>
      </p>

      <div className="w-[85%] bg-primary-2 px-2 py-6 max-xl:w-[90%] max-sm:w-full">
        <div className="flex items-center gap-2">
          <IoInformationCircleOutline className="h-8 w-8" />
          <span className="font-medium">Info</span>
        </div>

        <ul className="max-sm-l:pr-2 mt-3 flex list-disc flex-col gap-3 px-10 max-sm:text-sm">
          <li>
            You can only cancel your orders when order status is{" "}
            <strong>pending</strong> which nearly within 24 hours from
            submitting them.
          </li>
          <li>You can return orders within 14-days from delivery time.</li>
          <li>
            You can track your orders through order status in orders section.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default page;
