import ButtonFilterAll from "./ButtonFilterAll";

function Filter({ heading, direction = "horizontal", data, render, children }) {
  return (
    <div className="mb-12">
      <h3 className="mb-6 text-xl font-medium">{heading}</h3>
      <ButtonFilterAll filterType={heading} />

      <ul
        className={`mt-4 flex flex-wrap gap-4 ${
          direction === "horizontal"
            ? "flex-row items-center"
            : "flex-col items-start justify-center"
        }`}
      >
        {/* using React render-props pattern */}
        {heading !== "Prices" ? data.map(render) : children}
      </ul>
    </div>
  );
}

export default Filter;
