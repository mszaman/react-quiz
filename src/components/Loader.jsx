export default function Loader() {
  return (
    <div className="mb-10 flex flex-col items-center gap-5 text-ash-light">
      <div className="animate-spin-fast h-12 w-12 rounded-full border-8 border-theme border-r-ash-deep border-t-ash-deep"></div>
      <p className="font-nunito text-xl">Loading Data</p>
    </div>
  );
}
