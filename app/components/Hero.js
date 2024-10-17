import HeroSideBox from "./HeroSideBox";
import Button from "./Button";

function Hero() {
  return (
    <main className="grid grid-cols-[1fr_1.25fr_1fr] gap-8 max-lg:gap-4 max-md:grid-cols-1">
      <HeroSideBox imgSrc="./images/image-hero-1.png" />

      {/* background image will appear on mobile devices only */}
      <div className="flex flex-col items-center justify-center gap-4 max-md:h-96 max-md:w-full max-md:bg-[url('/images/hero-background.jpg')] max-md:bg-cover max-md:bg-center">
        <p className="text-center text-7xl font-semibold tracking-wider text-secondary max-xl:text-6xl max-lg:text-5xl max-md:text-6xl max-md:text-primary max-sm-l:text-5xl">
          ULTIMATE
        </p>
        <p
          // style={{ WebkitTextStroke: "1px #fefefe" }}
          className="mb-4 text-center text-9xl text-transparent text-stroke-1 text-stroke-secondary max-xl:text-8xl max-md:text-stroke-primary max-sm-l:text-7xl"
        >
          SALE
        </p>
        <div className="flex w-fit justify-center">
          <Button
            href="/products"
            rounded="rounded-lg"
            padding="px-32 py-3 max-lg:px-28 max-sm-l:px-20"
          >
            Shop Now
          </Button>
        </div>
      </div>

      <HeroSideBox imgSrc="./images/image-hero-2.png" />
    </main>
  );
}

export default Hero;
