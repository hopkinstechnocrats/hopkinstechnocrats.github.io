import React, { useState } from 'react';
import QRCode from 'react-qr-code';

function App() {
  const [text, setText] = useState('');
  const [checkBox, setCheckBox] = useState(false);
  const [counter, setCounter] = useState(0)

  const qrValue = `${text} \t ${checkBox} \t ${counter}`;
  return (
    <div>
      <h1>
        Autonomous
      </h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />      
      <input
        type="checkBox"
        checked={checkBox}
        onChange={(e) => setCheckBox(e.target.checked)}
      />
        <input
        type="number"
        value={counter}
        onChange={(e) => setCounter(Number(e.target.value))}
    />
      <QRCode value={qrValue}/>
    </div>
  );
}
export default App;
