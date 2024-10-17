"use client";

import { useState } from "react";
import ContainerBox from "./ContainerBox";
import Heading from "./Heading";
import TestimonialCard from "./TestimonialCard";
import { HiChevronRight } from "react-icons/hi2";
import { HiChevronLeft } from "react-icons/hi2";

const testimonialData = [
  {
    image: "testimonial-1.jpg",
    ratingTxt:
      "It's exactly what I've been looking for. Thank you for making it easy, pleasant and most of all hassle-free!",
    name: "Clerk",
  },
  {
    image: "testimonial-2.jpg",
    ratingTxt:
      "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
    name: "James",
  },
  {
    image: "testimonial-3.jpg",
    ratingTxt:
      "Your service is great. The product is outstanding, and I would definitely recommend it to my friends.",
    name: "Peter",
  },
];

function Testimonials() {
  const [selected, setSelected] = useState(0);
  // const [clickedButton, setClickedButton] = useState("");

  function handleRight() {
    setSelected((selectedOld) => selectedOld + 1);

    if (selected === testimonialData.length - 1) {
      setSelected(0);
    }
  }

  function handleLeft() {
    setSelected((selectedOld) => selectedOld - 1);

    if (selected === 0) {
      setSelected(testimonialData.length - 1);
    }
  }

  return (
    <ContainerBox>
      <div className="bg-primary-2 p-20 max-xl:p-16 max-lg:p-10 max-sm:px-2 max-sm:py-8">
        <Heading>This Is What Our Customers Say</Heading>
        <ul className="max-sm-l:w-[17rem] relative mx-auto mt-20 h-[25rem] w-[50rem] overflow-x-hidden max-xl:w-[45rem] max-lg:h-[20rem] max-lg:w-[35rem] max-md:w-[30rem] max-sm:w-[22rem]">
          {testimonialData.map((item, i) => (
            <TestimonialCard
              key={i}
              item={item}
              selected={selected}
              // clickedButton={clickedButton}
              index={i}
            />
          ))}
        </ul>

        <div className="mt-16 flex items-center justify-center gap-3 max-lg:mt-6 max-sm:mt-2">
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary"
            onClick={handleLeft}
          >
            <HiChevronLeft className="h-4 w-4" />
          </button>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary"
            onClick={handleRight}
          >
            <HiChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </ContainerBox>
  );
}

export default Testimonials;
