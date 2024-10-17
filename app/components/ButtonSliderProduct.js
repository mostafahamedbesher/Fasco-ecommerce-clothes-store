"use client";

function ButtonSliderProduct({
  children,
  images,
  setCurrentImage,
  currentIndex,
  direction,
  setCurrentIndex,
  scrollUp,
  scrollDown,
  scrollRight,
  scrollLeft,
}) {
  function handleClick() {
    if (direction === "down") {
      if (currentIndex < images.length - 1) {
        setCurrentIndex((cur) => cur + 1);
        setCurrentImage(images[currentIndex + 1]);
      }

      scrollDown();
    }

    if (direction === "up") {
      if (currentIndex > 0) {
        setCurrentIndex((cur) => cur - 1);
        setCurrentImage(images[currentIndex - 1]);

        scrollUp();
      }
    }

    if (direction === "left") {
      if (currentIndex > 0) {
        setCurrentIndex((cur) => cur - 1);
        setCurrentImage(images[currentIndex - 1]);

        scrollLeft();
      }
    }

    if (direction === "right") {
      if (currentIndex < images.length - 1) {
        setCurrentIndex((cur) => cur + 1);
        setCurrentImage(images[currentIndex + 1]);
      }

      scrollRight();
    }
  }

  return (
    <button
      className={`rounded-full bg-primary-2 p-2 max-lg:p-1 ${direction === "up" || direction === "down" ? "max-lg:hidden" : "hidden max-lg:block"}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default ButtonSliderProduct;
