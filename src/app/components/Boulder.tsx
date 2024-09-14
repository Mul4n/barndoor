import Image from "next/image";
import board from '../images/board_adjusted.jpg';
import { useBoulders } from "../reducers/BouldersContext";
import React from "react";

export function Boulder({ id }) {
  const boulders = useBoulders();
  const boulder = boulders.find((b) => b.id === id);

  return (<>
    <p>{boulder.name}</p>
    <p>{boulder.grade}</p>
    <HoldPicker boulder={boulder} />
  </>);
}
// size = 540
function HoldPicker({ boulder }) {
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
        {...Array(144).fill('').map((_, i) => <Hold index={i} boulder={boulder} />)}
      </div >
      <div></div>
    </div >
  );
}

function Hold({ index, boulder }) {
  return (<div key={`hold_${index}`} className={`border-2 border-solid border-gray-300 ${HOLDS_COLORS[boulder.holds[index]]}`}></div>)
}

const HOLDS_COLORS = {
  undefined: '',
  hand: 'bg-blue-500/50',
  start: 'bg-green-500/50',
  end: 'bg-red-500/50'
}