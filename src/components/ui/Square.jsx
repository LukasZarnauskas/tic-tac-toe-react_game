import React from 'react';
import { useState } from 'react';

function Square() {
  const [value, setvalue] = useState('');

  function whatValue() {
    setvalue('x');
  }

  return (
    <button onClick={whatValue} className="square">
      {value}
    </button>
  );
}

export default Square;
