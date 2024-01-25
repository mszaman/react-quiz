export default function Progress() {
  return (
    <>
      <section className="mb-10 flex flex-col gap-3 text-ash-medium">
        <progress
          // className="w-full rounded-full bg-ash-medium text-theme"
          max="15"
          value="5"
        />
        <div className="flex justify-between text-ash-medium">
          <p className="font-medium">
            <strong>1</strong>/15
          </p>
          <p className="font-medium">
            <strong>0</strong>/280
          </p>
        </div>
      </section>
    </>
  );
}
