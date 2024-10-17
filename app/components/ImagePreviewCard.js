"use client";

import Image from "next/image";

function ImagePreviewCard({
  image,
  setCurrentImage,
  currentImage,
  setCurrentIndex,
  index,
}) {
  function handleClick() {
    setCurrentImage(image);
    setCurrentIndex(index);
  }

  return (
    <li
      className={`relative aspect-square h-20 cursor-pointer transition-all ${
        currentImage === image ? "opacity-50" : "opacity-100"
      }`}
      onClick={handleClick}
    >
      <Image
        sizes=""
        src={image}
        fill
        quality={100}
        alt="small product image preview"
        // className="object-cover"
      />
    </li>

    // <div className="h-20 aspect-square rounded-md p-2">
    //   <img src={image} className="w-full" alt="small product image preview" />
    // </div>
  );
}

export default ImagePreviewCard;
