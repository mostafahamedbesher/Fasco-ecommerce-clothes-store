import ContainerBox from "./ContainerBox";

const brandsImages = [
  "brand-logo-1.png",
  "brand-logo-2.png",
  "brand-logo-3.png",
  "brand-logo-4.png",
  "brand-logo-5.png",
];

function BrandsLogos() {
  return (
    <ContainerBox>
      <ul className="flex items-center justify-between max-sm:flex-wrap max-sm:gap-6">
        {Array.from(brandsImages, (src, index) => (
          <li key={index}>
            <img
              src={`./images/${src}`}
              alt="brand logo"
              className="h-6 max-xl:h-5 max-lg:h-4 max-sm:h-4"
            />
          </li>
        ))}
      </ul>
    </ContainerBox>
  );
}

export default BrandsLogos;
