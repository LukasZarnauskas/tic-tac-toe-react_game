import './styles/reset.css';
import './styles/App.css';
import Square from './components/ui/Square';
import { useState } from 'react';

function App() {
  const [clickVal, setClickVal] = useState(0);
  const [stepInfo, setStepInfo] = useState([]);
  function counter() {
    setClickVal(clickVal + 1);
  }
  function setWinner(id, value) {
    const newStepInfo = [...stepInfo];
    newStepInfo.push({ identification: id, sign: value });
    setStepInfo(newStepInfo);

    if (
      (newStepInfo.filter(
        (step) => step.identification === 1 && step.sign === 'X',
      ).length > 0 &&
        newStepInfo.filter(
          (step) => step.identification === 2 && step.sign === 'X',
        ).length > 0 &&
        newStepInfo.filter(
          (step) => step.identification === 3 && step.sign === 'X',
        ).length > 0) ||
      (newStepInfo.filter(
        (step) => step.identification === 4 && step.sign === 'X',
      ).length > 0 &&
        newStepInfo.filter(
          (step) => step.identification === 5 && step.sign === 'X',
        ).length > 0 &&
        newStepInfo.filter(
          (step) => step.identification === 6 && step.sign === 'X',
        ).length > 0) ||
      (newStepInfo.filter(
        (step) => step.identification === 7 && step.sign === 'X',
      ).length > 0 &&
        newStepInfo.filter(
          (step) => step.identification === 8 && step.sign === 'X',
        ).length > 0 &&
        newStepInfo.filter(
          (step) => step.identification === 9 && step.sign === 'X',
        ).length > 0) ||
      (newStepInfo.filter(
        (step) => step.identification === 1 && step.sign === 'X',
      ).length > 0 &&
        newStepInfo.filter(
          (step) => step.identification === 4 && step.sign === 'X',
        ).length > 0 &&
        newStepInfo.filter(
          (step) => step.identification === 7 && step.sign === 'X',
        ).length > 0) ||
      (newStepInfo.filter(
        (step) => step.identification === 2 && step.sign === 'X',
      ).length > 0 &&
        newStepInfo.filter(
          (step) => step.identification === 5 && step.sign === 'X',
        ).length > 0 &&
        newStepInfo.filter(
          (step) => step.identification === 8 && step.sign === 'X',
        ).length > 0) ||
      (newStepInfo.filter(
        (step) => step.identification === 3 && step.sign === 'X',
      ).length > 0 &&
        newStepInfo.filter(
          (step) => step.identification === 6 && step.sign === 'X',
        ).length > 0 &&
        newStepInfo.filter(
          (step) => step.identification === 9 && step.sign === 'X',
        ).length > 0) ||
      (newStepInfo.filter(
        (step) => step.identification === 1 && step.sign === 'X',
      ).length > 0 &&
        newStepInfo.filter(
          (step) => step.identification === 5 && step.sign === 'X',
        ).length > 0 &&
        newStepInfo.filter(
          (step) => step.identification === 9 && step.sign === 'X',
        ).length > 0) ||
      (newStepInfo.filter(
        (step) => step.identification === 3 && step.sign === 'X',
      ).length > 0 &&
        newStepInfo.filter(
          (step) => step.identification === 5 && step.sign === 'X',
        ).length > 0 &&
        newStepInfo.filter(
          (step) => step.identification === 7 && step.sign === 'X',
        ).length > 0)
    ) {
      console.log('X Win');
    } else if (
      (newStepInfo.filter(
        (step) => step.identification === 1 && step.sign === 'O',
      ).length > 0 &&
        newStepInfo.filter(
          (step) => step.identification === 2 && step.sign === 'O',
        ).length > 0 &&
        newStepInfo.filter(
          (step) => step.identification === 3 && step.sign === 'O',
        ).length > 0) ||
      (newStepInfo.filter(
        (step) => step.identification === 4 && step.sign === 'O',
      ).length > 0 &&
        newStepInfo.filter(
          (step) => step.identification === 5 && step.sign === 'O',
        ).length > 0 &&
        newStepInfo.filter(
          (step) => step.identification === 6 && step.sign === 'O',
        ).length > 0) ||
      (newStepInfo.filter(
        (step) => step.identification === 7 && step.sign === 'O',
      ).length > 0 &&
        newStepInfo.filter(
          (step) => step.identification === 8 && step.sign === 'O',
        ).length > 0 &&
        newStepInfo.filter(
          (step) => step.identification === 9 && step.sign === 'O',
        ).length > 0) ||
      (newStepInfo.filter(
        (step) => step.identification === 1 && step.sign === 'O',
      ).length > 0 &&
        newStepInfo.filter(
          (step) => step.identification === 4 && step.sign === 'O',
        ).length > 0 &&
        newStepInfo.filter(
          (step) => step.identification === 7 && step.sign === 'O',
        ).length > 0) ||
      (newStepInfo.filter(
        (step) => step.identification === 2 && step.sign === 'O',
      ).length > 0 &&
        newStepInfo.filter(
          (step) => step.identification === 5 && step.sign === 'O',
        ).length > 0 &&
        newStepInfo.filter(
          (step) => step.identification === 8 && step.sign === 'O',
        ).length > 0) ||
      (newStepInfo.filter(
        (step) => step.identification === 3 && step.sign === 'O',
      ).length > 0 &&
        newStepInfo.filter(
          (step) => step.identification === 6 && step.sign === 'O',
        ).length > 0 &&
        newStepInfo.filter(
          (step) => step.identification === 9 && step.sign === 'O',
        ).length > 0) ||
      (newStepInfo.filter(
        (step) => step.identification === 1 && step.sign === 'O',
      ).length > 0 &&
        newStepInfo.filter(
          (step) => step.identification === 5 && step.sign === 'O',
        ).length > 0 &&
        newStepInfo.filter(
          (step) => step.identification === 9 && step.sign === 'O',
        ).length > 0) ||
      (newStepInfo.filter(
        (step) => step.identification === 3 && step.sign === 'O',
      ).length > 0 &&
        newStepInfo.filter(
          (step) => step.identification === 5 && step.sign === 'O',
        ).length > 0 &&
        newStepInfo.filter(
          (step) => step.identification === 7 && step.sign === 'O',
        ).length > 0)
    ) {
      console.log('O Win');
    }
  }

  // console.log(stepInfo);

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
