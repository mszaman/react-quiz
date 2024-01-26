import { useEffect } from "react";

export default function Timer({ remainingSeconds, dispatch }) {
  const mins = Math.floor(remainingSeconds / 60);
  const secs = remainingSeconds % 60;

  useEffect(
    function () {
      const id = setInterval(() => {
        dispatch({ type: "timer" });
      }, 1000);

      return function () {
        clearInterval(id);
      };
    },
    [dispatch],
  );

  return (
    <button className="rounded-full border-2 border-ash-dark bg-ash-dark px-6 py-3 font-nunito font-bold tracking-widest">
      {mins < 10 && "0"}
      {mins}:{secs < 10 && "0"}
      {secs}
    </button>
  );
}
