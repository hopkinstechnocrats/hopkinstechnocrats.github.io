import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [checkBox, setCheckBox] = useState(false);
  const [counter, setCounter] = useState(0)

  const handleIncrement = () => setCounter((prev) => prev + 1);
  const handleDecrement = () => setCounter((prev) => prev - 1);

  const qrValue = `${text} \t ${checkBox} \t ${counter}`;
  return (
    <div>
      <h1>
        Autonomous
      </h1>
      <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      </div>
      <div>
        <label>
      <input
        type="checkBox"
        checked={checkBox}
        onChange={(e) => setCheckBox(e.target.checked)}
      />
      Leave Start?
      </label>
      <div>
        <button onClick={handleDecrement} disabled={counter <= 0}>-</button>
        <input
        type="number"
        value={counter}
        onChange={(e) => setCounter(Number(e.target.value))}
        />
        <button onClick={handleIncrement}>+</button>
      </div>
      </div>
      <QRCode value={qrValue}/>
    </div>
  );
}
export default App;
