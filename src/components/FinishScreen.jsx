export default function FinishScreen({
  points,
  highestPossiblePoints,
  highScore,
  dispatch,
}) {
  const percentage = Math.ceil((points / highestPossiblePoints) * 100);

  return (
    <>
      <div className="text-center font-raleway text-ash-light">
        <p className="mb-4 w-full rounded-full bg-theme py-5 text-xl font-semibold tracking-wider">
          🤦‍♂️ You scored {points} out of {highestPossiblePoints} ({percentage}%)
        </p>
        <p className="mb-12 text-lg tracking-wider">
          (Highscore: {highScore} points)
        </p>
        <button
          className="float-right rounded-full border-2 border-ash-dark bg-ash-dark px-6 py-3 font-nunito text-xl font-bold tracking-widest transition-colors duration-300 hover:bg-ash-deep"
          onClick={() => dispatch({ type: "restart" })}
        >
          Restart Quiz
        </button>
      </div>
    </>
  );
}
