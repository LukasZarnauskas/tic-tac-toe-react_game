import React from 'react';
import { useState } from 'react';

function Square({ onClickCounter, clickVal }) {
  const [value, setvalue] = useState('');
  const [canClick, setCanClick] = useState(true);

  function whatValue() {
    if (clickVal % 2 === 0) {
      setvalue('x');
    } else {
      setvalue('O');
    }
  }
  function disableClick() {
    setCanClick(!canClick);
  }

  console.log(canClick);
  return (
    <button
      onClick={() => {
        whatValue();
        onClickCounter();
        disableClick();
      }}
      className="square"
      disabled={!canClick}
    >
      {value}
    </button>
  );
}

export default Square;
