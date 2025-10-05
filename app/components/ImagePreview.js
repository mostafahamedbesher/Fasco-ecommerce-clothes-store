"use client";

import Image from "next/image";
import ImagePreviewCard from "./ImagePreviewCard";
import { useEffect, useRef, useState } from "react";
import { HiChevronUp } from "react-icons/hi2";
import { HiChevronDown } from "react-icons/hi2";
import { HiOutlineChevronRight } from "react-icons/hi2";
import { HiOutlineChevronLeft } from "react-icons/hi2";
import ButtonSliderProduct from "./ButtonSliderProduct";

function ImagePreview({ images }) {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const listRef = useRef(null);

  // i used these two functions to scroll list up & down when clicking on their corresponding buttons
  const scrollUp = () => {
    listRef.current.scrollBy({
      top: -112, // Scrolls up 112px (small image height + gap)
      behavior: "smooth",
    });
  };

  const scrollDown = () => {
    listRef.current.scrollBy({
      top: 112, // Scrolls down 112px
      behavior: "smooth",
    });
  };

  // for mobile devices only (scroll horizontally)
  const scrollRight = () => {
    listRef.current.scrollBy({
      left: 112, // Scrolls right 112px (small image width + gap)
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    listRef.current.scrollBy({
      left: -112, // Scrolls left 112px
      behavior: "smooth",
    });
  };

  // to sync current image previewed when matchedProduct images changes
  useEffect(
    function () {
      setCurrentImage(images[0]);
    },
    [images],
  );

  return (
    <div className="grid h-fit grid-cols-[1fr_3fr] gap-1 max-lg:grid-cols-1 max-lg:gap-10 max-sm:gap-6">
      <div className="flex flex-col items-center gap-8 max-lg:order-2 max-lg:flex-row max-lg:gap-4 max-md:justify-center">
        {/* show slide buttons only when more than 3 images of the product */}
        {images.length > 3 && (
          <ButtonSliderProduct
            direction="up"
            images={images}
            setCurrentImage={setCurrentImage}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            scrollUp={scrollUp}
            scrollDown={scrollDown}
          >
            <HiChevronUp className="h-6 w-6" />
          </ButtonSliderProduct>
        )}

        {/* will appear on mobile devices only */}
        {images.length > 3 && (
          <ButtonSliderProduct
            direction="left"
            images={images}
            setCurrentImage={setCurrentImage}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            scrollUp={scrollUp}
            scrollDown={scrollDown}
            scrollLeft={scrollLeft}
          >
            <HiOutlineChevronLeft className="h-5 w-5" />
          </ButtonSliderProduct>
        )}

        {/* small images */}
        <ul
          ref={listRef}
          style={{ scrollbarWidth: "none" }}
          className="flex h-80 flex-col gap-8 overflow-y-scroll max-lg:h-fit max-lg:w-80 max-lg:flex-row max-lg:overflow-x-scroll"
        >
          {images.map((image, i) => (
            <ImagePreviewCard
              setCurrentImage={setCurrentImage}
              currentImage={currentImage}
              image={image}
              index={i}
              setCurrentIndex={setCurrentIndex}
              key={i}
            />
          ))}
        </ul>

        {images.length > 3 && (
          <ButtonSliderProduct
            direction="down"
            images={images}
            setCurrentImage={setCurrentImage}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            scrollUp={scrollUp}
            scrollDown={scrollDown}
          >
            <HiChevronDown className="h-6 w-6" />
          </ButtonSliderProduct>
        )}

        {/* will appear on monile devices only */}
        {images.length > 3 && (
          <ButtonSliderProduct
            direction="right"
            images={images}
            setCurrentImage={setCurrentImage}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            scrollUp={scrollUp}
            scrollDown={scrollDown}
            scrollRight={scrollRight}
          >
            <HiOutlineChevronRight className="h-5 w-5" />
          </ButtonSliderProduct>
        )}
      </div>

      {/* large image old-height --> h-[80dvh]*/}
      <div className="relative h-[38rem] w-full max-xl:h-[34rem] max-md:h-[45rem] max-sm:h-[28rem] max-sm-l:h-[30rem]">
        <Image
          fill
          quality={100}
          src={currentImage}
          alt="product image"
          // className="object-cover"
        />
      </div>
    </div>
  );
}

export default ImagePreview;
