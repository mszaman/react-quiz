export default function Header() {
  return (
    <>
      <header className="mb-10 flex flex-col items-center justify-center gap-10 md:flex-row">
        <img src="react.svg" alt="React Logo" className="h-24" />
        <h1 className="text-center font-cody text-6xl">The React Quiz</h1>
      </header>
    </>
  );
}
