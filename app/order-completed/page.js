import Link from "next/link";

function page() {
  return (
    <div className="mt-24 flex flex-col items-center justify-center gap-4 text-black">
      <p className="max-sm-l:text-lg text-3xl font-semibold max-md:text-2xl">
        Order Completed Successfully
      </p>
      <Link
        href="/user/orders"
        className="max-sm-l:text-base border-b-2 border-black text-lg font-medium"
      >
        Manage Your Orders &rarr;
      </Link>
    </div>
  );
}

export default page;
