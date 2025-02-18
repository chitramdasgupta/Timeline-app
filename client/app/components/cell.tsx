import isNil from "lodash/isNil";

export function Cell({ index, event }) {
  console.log(event);
  return (
    <button
      className="border-2 border-solid border-teal-600 cursor-pointer mx-1 my-1 min-w-12"
      onClick={() => alert("Cell clicked!")}
    >
      {isNil(event?.emoji) ? `${index}` : `${event?.emoji}`}
    </button>
  );
}
