// import Image from "next/image";

function HeroSideBox({ imgSrc }) {
  return (
    <div className="flex flex-col items-center justify-end rounded-lg bg-primary-2 max-md:hidden">
      <img src={imgSrc} alt="hero image fashion" className="h-[75%]" />
    </div>
  );
}

export default HeroSideBox;
