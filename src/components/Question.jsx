import Option from "./Option";

export default function Question({ question, dispatch, answer }) {
  return (
    <>
      <div className="flex flex-col items-center">
        <h3 className="mb-5 text-center font-nunito text-xl font-semibold">
          {question.question}
        </h3>
        <Option question={question} dispatch={dispatch} answer={answer} />
      </div>
    </>
  );
}
