import { useState } from 'react';

// This counter updates all the boxes.


function NumberBox({  value, onNumberBoxClick  }) {
  return (
    <button className="numberBox" onClick={onNumberBoxClick}>{value}</button>
  );
}

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    newCount = counter + 1;
    return setCounter(newCount);
  }

  return (
    <>
      <div className="counter">
        <NumberBox value={counter} onNumberBoxClick={() => handleClick()} />
        <NumberBox value={counter} onNumberBoxClick={() => handleClick()} />
        <NumberBox value={counter} onNumberBoxClick={() => handleClick()} />
        <NumberBox value={counter} onNumberBoxClick={() => handleClick()} />
      </div>
    </>
  );
}