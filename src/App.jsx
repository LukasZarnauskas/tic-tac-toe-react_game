import './styles/reset.css';
import './styles/App.css';
import Square from './components/ui/Square';
import { useState } from 'react';

function App() {
  const [clickVal, setClickVal] = useState(0);
  const [stepInfo, setStepInfo] = useState({});
  function counter() {
    setClickVal(clickVal + 1);
  }
  function setWinner(id, value) {
    setStepInfo((id, value) + stepInfo);
    console.log(stepInfo);
  }
  return (
    <div className="container">
      <Square
        id={1}
        onClickCounter={counter}
        clickVal={clickVal}
        setWinner={setWinner}
      />
      <Square
        id={2}
        onClickCounter={counter}
        clickVal={clickVal}
        setWinner={setWinner}
      />
      <Square
        id={3}
        onClickCounter={counter}
        clickVal={clickVal}
        setWinner={setWinner}
      />
      <Square
        id={4}
        onClickCounter={counter}
        clickVal={clickVal}
        setWinner={setWinner}
      />
      <Square
        id={5}
        onClickCounter={counter}
        clickVal={clickVal}
        setWinner={setWinner}
      />
      <Square
        id={6}
        onClickCounter={counter}
        clickVal={clickVal}
        setWinner={setWinner}
      />
      <Square
        id={7}
        onClickCounter={counter}
        clickVal={clickVal}
        setWinner={setWinner}
      />
      <Square
        id={8}
        onClickCounter={counter}
        clickVal={clickVal}
        setWinner={setWinner}
      />
      <Square
        id={9}
        onClickCounter={counter}
        clickVal={clickVal}
        setWinner={setWinner}
      />
    </div>
  );
}
export default App;
