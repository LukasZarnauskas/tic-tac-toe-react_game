import React from 'react';
import { useState } from 'react';

function Square({ onClickCounter, clickVal, id, setWinner, disableAll }) {
  const [value, setValue] = useState('');
  const [canClick, setCanClick] = useState(true);

  function whatValue() {
    if (clickVal % 2 === 0) {
      setValue('X');
      setWinner(id, 'X');
    } else {
      setValue('O');
      setWinner(id, 'O');
    }
  }

  function disableClick() {
    setCanClick(false);
  }

  return (
    <button
      id={id}
      onClick={() => {
        whatValue();
        onClickCounter();
        disableClick();
      }}
      className="square"
      disabled={!canClick || !disableAll}
    >
      {value}
    </button>
  );
}

export default Square;
