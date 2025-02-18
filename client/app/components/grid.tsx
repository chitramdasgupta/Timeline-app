import range from "lodash/range";
import { Cell } from "./cell";

const NUM_WEEKS = 100 * 52;

export default function Grid({ events }) {
  return (
    <div>
      {range(NUM_WEEKS).map((i) => (
        <Cell index={i} event={events.find((event) => event.index == i)} />
      ))}
    </div>
  );
}
