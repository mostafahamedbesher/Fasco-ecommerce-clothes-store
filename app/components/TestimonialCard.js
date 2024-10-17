"use client";

import Image from "next/image";
import RatingStars from "./RatingStars";
import { useEffect, useRef } from "react";

function TestimonialCard({ item, selected, index }) {
  const translateVal = useRef();
  translateVal.current = 100 * (index - selected);

  useEffect(
    function () {
      translateVal.current = 100 * (index - selected);
    },
    [selected],
  );

  return (
    <li
      style={{ transform: `translatex(${translateVal.current}%)` }}
      className={`max-sm-l:px-2 max-sm-l:gap-4 max-sm-l:py-6 max-sm-l:h-[16rem] absolute top-0 flex w-full gap-12 rounded-lg bg-primary px-10 py-14 shadow-md transition-all duration-500 max-xl:gap-8 max-xl:py-12 max-lg:px-8 max-lg:py-8 max-sm:gap-6 max-sm:px-4`}
    >
      <div className="max-sm-l:h-36 relative h-64 w-[30rem] overflow-hidden rounded-sm max-xl:w-[24rem] max-lg:h-56 max-sm:h-44">
        <Image
          className="object-cover"
          fill
          alt="client testimonial image"
          src={`/images/${item.image}`}
        />
      </div>

      <div className="flex flex-col justify-between">
        <p className="max-sm-l:text-xs text-xl text-secondary max-xl:text-lg max-lg:text-base max-sm:text-sm">{`"${item.ratingTxt}"`}</p>
        <RatingStars ratingVal={5} color="#FCA120" />
        <div className="h-[1px] bg-black"></div>
        <p className="text-2xl font-semibold text-black max-xl:text-xl max-sm:text-lg">
          {item.name}
        </p>
      </div>
    </li>
  );
}

export default TestimonialCard;
