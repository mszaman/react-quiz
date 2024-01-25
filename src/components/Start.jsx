export default function Start() {
  return (
    <div className="flex flex-col items-center py-10 text-center font-raleway">
      <h2 className="mb-5 text-4xl font-bold">Welcome to the React Quiz!</h2>
      <h3 className="mb-10 text-2xl font-semibold">
        15 questions to test your React Mastery.
      </h3>
      <button className="rounded-full border-2 border-ash-dark bg-ash-dark px-6 py-3 font-nunito text-xl font-semibold tracking-wider transition-colors duration-300 hover:bg-ash-deep">
        Let's Start
      </button>
    </div>
  );
}
