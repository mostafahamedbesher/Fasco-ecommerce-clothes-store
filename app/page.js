import BrandsLogos from "./components/BrandsLogos";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProductsMostRated from "./components/ProductsMostRated";
import Testimonials from "./components/Testimonials";

export const revalidate = 0;

export default function Page() {
  return (
    <div>
      <Hero />
      <BrandsLogos />
      <ProductsMostRated />
      <Testimonials />
      <Footer />
    </div>
  );
}
