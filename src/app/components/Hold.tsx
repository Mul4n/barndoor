import { HOLDS_COLORS } from "../constants";

export default function Hold({ index, boulder, setBoulder, editMode }: { index: string, boulder: Boulder, setBoulder: React.Dispatch<React.SetStateAction<Boulder>>, editMode: boolean }) {
  const handleHoldClick = () => {
    if (!editMode) return;
    // on click, we iterate over the start/hand/end colors, if we go back to 0, delete the hold from the boulder
    if ((parseInt(boulder.holds[index]) + 1) % 4 === 0) {
      delete boulder.holds[index];
    } else {
      // else we add the hold or change its color to the next one
      boulder.holds[index] = parseInt(boulder.holds[index] ?? 0) + 1
    }
    setBoulder({ ...boulder });
  };

  return (<div
    className={` ${HOLDS_COLORS[boulder.holds[index]]}`}
    onClick={handleHoldClick}
  ></div>)
}
