function Spinner({ marginY }) {
  return (
    <div className={`loader mx-auto ${marginY ? marginY : "my-48"}`}></div>
  );
}

export default Spinner;
