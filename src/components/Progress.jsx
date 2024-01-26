export default function Progress({
  points,
  index,
  numOfQuestions,
  answer,
  highestPossiblePoints,
}) {
  return (
    <>
      <section className="mb-10 flex flex-col gap-3 text-ash-medium">
        <progress
          // className="w-full rounded-full bg-ash-medium text-theme"
          max={numOfQuestions}
          value={index + Number(answer !== null)}
        />
        <div className="flex justify-between text-ash-medium">
          <p className="font-medium">
            <strong>{index + 1}</strong>/{numOfQuestions}
          </p>
          <p className="font-medium">
            <strong>{points}</strong>/{highestPossiblePoints}
          </p>
        </div>
      </section>
    </>
  );
}
