function ProductSizes({ sizes }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-semibold text-black">
        Size : {sizes.at(0).toUpperCase()}
      </p>
      <div className="flex items-center gap-2">
        {sizes.map((size, i) => (
          <span
            key={i}
            className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-solid border-[#eee] p-4 text-sm font-normal uppercase text-black"
          >
            {size}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProductSizes;
