import React from 'react'
import './App.css';
import { QRCode } from 'react-qrcode-logo';
const App = () => {
  return (
    <>
      <h1>
      Autonomous
      </h1>
      
    <input type="counter" id ="counter"></input>
    <label htmlFor ="counter">L4</label>
    <div>
        <input type="checkbox" id ="checkbox"></input>
        <label htmlFor ="checkbox">Leave Start?</label>
    </div>
    <div>
      <input type="text" id ="text"></input>
      <label htmlFor ="text">Comments</label>
    </div>
    <QRCode value="this is data"/>
    <div>
    </>
  );
}

export default App;