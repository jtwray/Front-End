import React from 'react';
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import logo from './logo.svg';
import './App.css';
import login from './components/login.js';
import Register from './components/register.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
