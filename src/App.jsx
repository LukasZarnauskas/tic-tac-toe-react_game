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
      <Square onClickCounter={counter} clickVal={clickVal} />
      <Square onClickCounter={counter} clickVal={clickVal} />
      <Square onClickCounter={counter} clickVal={clickVal} />
      <Square onClickCounter={counter} clickVal={clickVal} />
      <Square onClickCounter={counter} clickVal={clickVal} />
      <Square onClickCounter={counter} clickVal={clickVal} />
      <Square onClickCounter={counter} clickVal={clickVal} />
      <Square onClickCounter={counter} clickVal={clickVal} />
      <Square onClickCounter={counter} clickVal={clickVal} />
    </div>
  );
}
export default App;
