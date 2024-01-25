import Option from "./Option";

export default function Question() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h3 className="mb-5 text-center font-nunito text-xl font-semibold">
          Which is the most popular JavaScript Framework?
        </h3>
        <Option />
      </div>
    </>
  );
}
