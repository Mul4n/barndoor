import Image from "next/image";
import board from '../images/board_adjusted.jpg';
import { useBoulders, useBouldersDispatch } from "../reducers/BouldersContext";
import React from "react";

export function Boulder({ id }: { id: string }) {
  const boulders: Boulder[] = useBoulders();
  const boulder = boulders.find((b) => b.id === id);

  if (!boulder) {
    return (<>Whoops not a known boulder</>);
  }

  return (<>
    <p>{boulder?.name}</p>
    <p>{boulder?.grade}</p>
    <HoldPicker boulder={boulder} />
  </>);
}
// 540px from top to bottom of the non-kicker panel
function HoldPicker({ boulder }: { boulder: Boulder }) {
  return (
    <div style={{
      backgroundSize: 'cover',
      backgroundImage: `url(${board.src})`,
      height: '100vh',
      width: `${719 / 756 * 100}vh`
    }}>
      <div className='grid grid-cols-12' style={{
        width: `${719 / 756 * 100}vh`,
        height: `${540 / 756 * 100}%`,
      }}>
        {...Array(144).fill('').map((_, i) => <Hold index={i.toString()} boulder={boulder} />)}
      </div >
      <div></div>
    </div >
  );
}

function Hold({ index, boulder }: { index: string, boulder: Boulder }) {
  const dispatch = useBouldersDispatch();
  const handleHoldClick = () => {
    // on click, we iterate over the start/hand/end colors, if we go back to 0, delete the hold from the boulder
    if ((boulder.holds[index] + 1) % 4 === 0) {
      delete boulder.holds[index];
    } else {
      // else we add the hold or change its color to the next one
      boulder.holds[index] = (boulder.holds[index] ?? 0) + 1
    }
    dispatch({ type: 'changed', boulder })
  };

  return (<div
    key={`hold_${index}`}
    className={`border-2 border-solid border-gray-300 ${HOLDS_COLORS[boulder.holds[index]]}`}
    onClick={handleHoldClick}
  ></div>)
}

const HOLDS_COLORS = {
  'undefined': '',
  '1': 'bg-green-500/50',
  '2': 'bg-blue-500/50',
  '3': 'bg-red-500/50'
}