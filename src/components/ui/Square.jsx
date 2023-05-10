import React from 'react';
import { useState } from 'react';

function Square({ onClickCouter, clickVal }) {
  const [value, setvalue] = useState('');

  function whatValue() {
    if (clickVal % 2 === 0) {
      setvalue('x');
    } else {
      setvalue('O');
    }
  }
  console.log(clickVal);
  return (
    <button
      onClick={() => {
        whatValue();
        onClickCouter();
      }}
      className="square"
    >
      {value}
    </button>
  );
}

export default Square;
