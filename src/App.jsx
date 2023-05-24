import './styles/reset.css';
import './styles/App.css';
import Square from './components/ui/Square';
import { useState } from 'react';

function App() {
  const [clickVal, setClickVal] = useState(0);
  const [stepInfo, setStepInfo] = useState([]);
  const [win, setWin] = useState('');
  const [disable, setDisabled] = useState(true);
  function counter() {
    setClickVal(clickVal + 1);
  }

  function setWinner(id, value) {
    const newStepInfo = [...stepInfo];
    newStepInfo.push({ identification: id, sign: value });
    setStepInfo(newStepInfo);

    if (
      newStepInfo.filter(
        (step) => [1, 2, 3].includes(step.identification) && step.sign === 'X',
      ).length === 3 ||
      newStepInfo.filter(
        (step) => [4, 5, 6].includes(step.identification) && step.sign === 'X',
      ).length === 3 ||
      newStepInfo.filter(
        (step) => [7, 8, 9].includes(step.identification) && step.sign === 'X',
      ).length === 3 ||
      newStepInfo.filter(
        (step) => [1, 4, 7].includes(step.identification) && step.sign === 'X',
      ).length === 3 ||
      newStepInfo.filter(
        (step) => [2, 5, 8].includes(step.identification) && step.sign === 'X',
      ).length === 3 ||
      newStepInfo.filter(
        (step) => [3, 6, 9].includes(step.identification) && step.sign === 'X',
      ).length === 3 ||
      newStepInfo.filter(
        (step) => [1, 5, 9].includes(step.identification) && step.sign === 'X',
      ).length === 3 ||
      newStepInfo.filter(
        (step) => [3, 5, 7].includes(step.identification) && step.sign === 'X',
      ).length === 3
    ) {
      return setWin('X'), setDisabled(false);
    } else if (
      newStepInfo.filter(
        (step) => [1, 2, 3].includes(step.identification) && step.sign === 'O',
      ).length === 3 ||
      newStepInfo.filter(
        (step) => [4, 5, 6].includes(step.identification) && step.sign === 'O',
      ).length === 3 ||
      newStepInfo.filter(
        (step) => [7, 8, 9].includes(step.identification) && step.sign === 'O',
      ).length === 3 ||
      newStepInfo.filter(
        (step) => [1, 4, 7].includes(step.identification) && step.sign === 'O',
      ).length === 3 ||
      newStepInfo.filter(
        (step) => [2, 5, 8].includes(step.identification) && step.sign === 'O',
      ).length === 3 ||
      newStepInfo.filter(
        (step) => [3, 6, 9].includes(step.identification) && step.sign === 'O',
      ).length === 3 ||
      newStepInfo.filter(
        (step) => [1, 5, 9].includes(step.identification) && step.sign === 'O',
      ).length === 3 ||
      newStepInfo.filter(
        (step) => [3, 5, 7].includes(step.identification) && step.sign === 'O',
      ).length === 3
    ) {
      return setWin('O'), setDisabled(false);
    } else if (
      newStepInfo.filter((step) =>
        [1, 2, 3, 4, 5, 6, 7, 8, 9].includes(step.identification),
      ).length === 9
    ) {
      setWin('Draw');
    }
  }

  return (
    <div>
      <div className="winMsg">
        {win === 'X' || win === 'O' ? (
          <p className="winText">{win} win !!!</p>
        ) : (
          <p> </p>
        )}
        {win === 'Draw' && <p className="winText">{win}</p>}
      </div>
      <div className="container">
        <Square
          id={1}
          onClickCounter={counter}
          clickVal={clickVal}
          setWinner={setWinner}
          disableAll={disable}
        />
        <Square
          id={2}
          onClickCounter={counter}
          clickVal={clickVal}
          setWinner={setWinner}
          disableAll={disable}
        />
        <Square
          id={3}
          onClickCounter={counter}
          clickVal={clickVal}
          setWinner={setWinner}
          disableAll={disable}
        />
        <Square
          id={4}
          onClickCounter={counter}
          clickVal={clickVal}
          setWinner={setWinner}
          disableAll={disable}
        />
        <Square
          id={5}
          onClickCounter={counter}
          clickVal={clickVal}
          setWinner={setWinner}
          disableAll={disable}
        />
        <Square
          id={6}
          onClickCounter={counter}
          clickVal={clickVal}
          setWinner={setWinner}
          disableAll={disable}
        />
        <Square
          id={7}
          onClickCounter={counter}
          clickVal={clickVal}
          setWinner={setWinner}
          disableAll={disable}
        />
        <Square
          id={8}
          onClickCounter={counter}
          clickVal={clickVal}
          setWinner={setWinner}
          disableAll={disable}
        />
        <Square
          id={9}
          onClickCounter={counter}
          clickVal={clickVal}
          setWinner={setWinner}
          disableAll={disable}
        />
      </div>
    </div>
  );
}
export default App;
