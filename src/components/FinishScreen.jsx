export default function FinishScreen() {
  return (
    <>
      <div className="text-center font-raleway text-ash-light">
        <p className="mb-4 w-full rounded-full bg-theme py-5 text-xl font-semibold tracking-wider">
          🤦‍♂️ You scored X out of X (X%)
        </p>
        <p className="mb-12 text-lg tracking-wider">(Highscore: 0 points)</p>
        <button className="float-right rounded-full border-2 border-ash-dark bg-ash-dark px-6 py-3 font-nunito text-xl font-bold tracking-widest transition-colors duration-300 hover:bg-ash-deep">
          Restart Quiz
        </button>
      </div>
    </>
  );
}
