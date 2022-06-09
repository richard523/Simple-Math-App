import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter.jsx';
import Fib from './Fib.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>A Simple Math App</h1>
      <Counter/> 
      <Fib/>
      </header>
    </div>
  );
}

export default App;
