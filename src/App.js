import React from 'react'
import './App.css';
import Counter from './components/Counter';
const App = () => {
  return (
    <>
      <h1>
      Autonomous
      </h1>
      
    <div className="App">
      <Counter/>
    </div>
    <div>
        <input type="checkbox" id ="checkbox"></input>
        <label htmlFor ="checkbox">Leave Start?</label>
    </div>
    <div>
      <input type="text"/>
    </div>
    </>
  );
}

export default App;
