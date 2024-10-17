"use client";

export default function Error({ error, reset }) {
  // console.log(error);
  return (
    <main className="flex flex-col items-center justify-center gap-6 max-sm:gap-8">
      <h1 className="text-3xl font-semibold max-sm:text-2xl">
        Something went wrong!
      </h1>
      <p className="text-lg max-sm:text-base">{error.message}</p>

      <button
        className="inline-block bg-black px-6 py-3 text-lg text-primary max-sm:text-base"
        onClick={reset}
      >
        Try again
      </button>
    </main>
  );
}
