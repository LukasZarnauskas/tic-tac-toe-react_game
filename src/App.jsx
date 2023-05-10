import './styles/reset.css';
import './styles/App.css';
import Square from './components/ui/Square';
import { useState } from 'react';

function App() {
  const [clickVal, setClickVal] = useState(0);

  function counter() {
    setClickVal(clickVal + 1);
  }
  return (
    <div className="container">
      <p>{clickVal}</p>
      <Square onClickCouter={counter} clickVal={clickVal} />
      <Square onClickCouter={counter} clickVal={clickVal} />
      <Square onClickCouter={counter} clickVal={clickVal} />
      <Square onClickCouter={counter} clickVal={clickVal} />
      <Square onClickCouter={counter} clickVal={clickVal} />
      <Square onClickCouter={counter} clickVal={clickVal} />
      <Square onClickCouter={counter} clickVal={clickVal} />
      <Square onClickCouter={counter} clickVal={clickVal} />
      <Square onClickCouter={counter} clickVal={clickVal} />
    </div>
  );
}
export default App;
