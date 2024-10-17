import Link from "next/link";

function NotFound() {
  return (
    <main className="mt-8 flex flex-col items-center justify-center gap-4">
      <h2 className="max-sm-l:text-lg text-2xl font-medium">
        This page could not be found :(
      </h2>
      <Link
        href="/"
        className="max-sm-l:text-lg border-b-2 border-black text-xl font-semibold"
      >
        Go Back Home
      </Link>
    </main>
  );
}

export default NotFound;
