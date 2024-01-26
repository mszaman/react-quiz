export default function Option({ question, dispatch, answer }) {
  const hasAnswer = answer !== null;
  return (
    <div className="mb-8 flex w-full flex-col gap-2">
      {question.options.map((option, i) => (
        <button
          key={option}
          className={`cursor-pointer rounded-full border-2 border-ash-dark bg-ash-dark px-6 py-3 text-start font-nunito text-xl font-semibold tracking-wider transition-all duration-300 hover:translate-x-3 hover:bg-ash-deep disabled:cursor-not-allowed disabled:transition-none ${question.correctOption === i ? "disabled:translate-x-3 disabled:border-theme disabled:bg-theme disabled:text-ash-light" : "disabled:border-accent disabled:bg-accent disabled:text-ash-deep disabled:hover:translate-x-0"}`}
          onClick={() => dispatch({ type: "newAnswer", payload: i })}
          disabled={hasAnswer}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
