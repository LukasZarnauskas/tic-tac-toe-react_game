import './styles/reset.css';
import './styles/App.css';
import Square from './components/ui/Square';
import { useState } from 'react';

function App() {
  return (
    <div className="container">
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  );
}
export default App;
