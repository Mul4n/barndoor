import board from '../images/board_adjusted.jpg';
import { BoulderType, NewBoulderType } from '../interfaces';
import Hold from "./Hold";

export default function HoldPicker({ boulder, setBoulder, editMode }: { boulder: BoulderType | NewBoulderType, setBoulder: React.Dispatch<React.SetStateAction<BoulderType | NewBoulderType>>, editMode: boolean }) {
  return (
    <div style={{
      backgroundSize: 'cover',
      backgroundImage: `url(${board.src})`,
      height: `${747 / 689 * 100}vw`,
      width: `100vw`
    }}>
      <div className='grid grid-cols-12 gap-0.5' style={{
        width: `100vw`,
        height: `${538 / 756 * 100}%`,
      }}>
        {...Array(144).fill('').map((_, i) => <Hold key={`hold_${i}`} index={i.toString()} boulder={boulder} setBoulder={setBoulder} editMode={editMode} />)}
      </div >
      <div></div>
    </div >
  );
}