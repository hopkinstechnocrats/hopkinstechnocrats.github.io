import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import './App.css';
import Textbox from './components/Textbox';
import Checkbox from './components/Checkbox';
import Counter from './components/Counter';

function App() {
  const [text, setText] = useState('');
  const [checkBox, setCheckBox] = useState(false);
  const [counter, setCounter] = useState(0);

  const qrValue = `${text} \t ${checkBox} \t ${counter}`;

  return (
    <div className="App">
      <h1>Autonomous</h1>
      <Textbox
        label="Text"
        value={text.text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your comment"
      />
      <Textbox
        label="Box 2"
        value={text.box2}
        onChange={(e) => setText(e.target.value)}
        placeholder="Example Text Here"
        />
      <Checkbox
        label="Leave Start?"
        checked={checkBox}
        onChange={(e) => setCheckBox(e.target.checked)}
      />
      <Counter value={counter} setValue={setCounter} />
      <QRCode value={qrValue} />
    </div>
  );
}

export default App;
