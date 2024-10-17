// import { NextResponse } from "next/server";
// import { auth } from "./app/lib/auth";

// export async function middleware(request) {
//   console.log(request);
//   const session = await auth();

//   if (!session?.user?.name) {
//     return NextResponse.redirect(new URL("/signin", request.url));
//   } else return;
// }

export { auth as middleware } from "@/app/lib/auth";

export const config = {
  matcher: ["/user", "/checkout", "/wishlist", "/order-completed"],
};
