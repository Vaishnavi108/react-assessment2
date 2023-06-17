import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register"; 
 import  gat from "./gat.png";

function App() { 
  const [currentForm, setCurrentForm] = useState('login');
  
  const toggleForm = (formName) => {
    setCurrentForm(formName);  
  } 
  return ( 
    <div className="App">
      <img src={gat} className="logo" alt=""/>
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />  
      }
    </div>
    
  );
}

export default App;
