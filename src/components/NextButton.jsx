export default function NextButton({
  answer,
  index,
  numOfQuestions,
  dispatch,
}) {
  function handleNextQuestion() {
    dispatch({ type: "nextQuestion" });
  }
  function handleFinish() {
    dispatch({ type: "finish" });
  }

  // if (answer === null) return null;
  if (index < numOfQuestions - 1) {
    return (
      <>
        <Button answer={answer} dispatch={handleNextQuestion}>
          Next
        </Button>
      </>
    );
  }
  return (
    <>
      <Button answer={answer} dispatch={handleFinish}>
        Finish
      </Button>
    </>
  );
}

function Button({ children, answer, dispatch }) {
  return (
    <button
      className="rounded-full border-2 border-ash-dark bg-ash-dark px-6 py-3 font-nunito font-bold uppercase tracking-widest transition-colors duration-300 hover:bg-ash-deep disabled:cursor-not-allowed disabled:transition-none disabled:hover:bg-ash-dark"
      disabled={answer === null}
      onClick={dispatch}
    >
      {children}
    </button>
  );
}
