import Button from "./Button";

function ButtonSoldout({ disabled }) {
  return (
    <Button
      bgColor="#000"
      TxtColor="#fefefe"
      disabled={disabled}
      padding="px-40 py-3 max-xl:px-28 max-lg:px-20 max-md:px-40 max-sm:px-28 max-sm-l:px-16"
    >
      Sold out
    </Button>
  );
}

export default ButtonSoldout;
