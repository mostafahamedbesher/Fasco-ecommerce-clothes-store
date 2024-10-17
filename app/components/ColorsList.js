import Color from "./Color";

function ColorsList({ colors }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {colors.map((color, i) => (
        <Color key={i} color={color} type="mini" />
      ))}
    </div>
  );
}

export default ColorsList;
