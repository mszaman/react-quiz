const options = ["Anguler", "React", "Svelte", "Vue"];

export default function Option() {
  return (
    <div className="mb-8 flex w-full flex-col gap-2">
      {options.map((option, i) => (
        <button
          key={i}
          className="rounded-full border-2 border-ash-dark bg-ash-dark px-6 py-3 text-start font-nunito text-xl font-semibold tracking-wider transition-all duration-300 hover:translate-x-3 hover:bg-ash-deep"
        >
          {option}
        </button>
      ))}
    </div>
  );
}
