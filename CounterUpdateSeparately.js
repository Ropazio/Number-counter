import { useState } from "react";

// This counter updates all the boxes separately.

function NumberBox() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    newCount = setCounter(counter + 1);
    return newCount;
  }
  
  return (
    <button className="numberBox" onClick={handleClick}>
      {counter}
    </button>
  );
}

export default function Counter() {
  return (
    <>
      <div className="counter">
        <NumberBox />
        <NumberBox />
      </div>
    </>
  );
}