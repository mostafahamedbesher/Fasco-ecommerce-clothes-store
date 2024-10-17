function SpinnerMini({ spinnerColor, marginY }) {
  return (
    <div
      className={`loader-mini mx-auto ${marginY ? marginY : "my-4"} ${
        spinnerColor ? spinnerColor : ""
      }`}
    ></div>
  );
}

export default SpinnerMini;
