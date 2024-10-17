import { Poppins } from "next/font/google";
import "@/app/styles/globals.css";
import Navbar from "./components/Navbar";
import { CartProvider } from "./contexts/cartContext";
import { Toaster } from "react-hot-toast";

const poppins_font = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Fasco",
  description:
    "Discover the latest in men's fashion at Fasco. Shop a curated collection of stylish, high-quality apparel for every occasion. From casual wear to formal attire, find everything you need to elevate your wardrobe. Free shipping and easy returns. Shop now ",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <CartProvider>
        <body
          className={`${poppins_font.className} mx-32 my-10 bg-primary text-secondary selection:bg-gray-300 max-xl:mx-16 max-lg:mx-10 max-md:mx-8 max-sm:mx-5 max-sm-l:mx-3`}
        >
          <Navbar />

          <main>{children}</main>

          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{
              margin: "8px",
              "@media (maxWidth: 425px)": {
                fontSize: "12px",
                maxWidth: "400",
                padding: "12px 16px",
              },
            }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 3000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500",
                padding: "16px 24px",
                backgroundColor: "var(--color-primary-2)",
                color: "var(--color-secondary)",
              },
            }}
          />
        </body>
      </CartProvider>
    </html>
  );
}
