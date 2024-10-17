import Spinner from "@/app/components/Spinner";

function loading() {
  return (
    <div className="grid items-center justify-center">
      <Spinner marginY="my-8" />
      <p className="text-base font-medium">Loading Product Items Data...</p>
    </div>
  );
}

export default loading;
