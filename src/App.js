import logo from './logo.svg';
import './App.css';


import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Button from "react-bootstrap/Button";

import "./App.css";
function App1(){
  return(
    <div id='sacem'>
      <img src="logo512.png" class="rounded float-left" alt="logo"></img> 
    </div> 
  );
}

function App() {
  return (
   <div className="App">
      <header className="App-header">
      <div id='sacem'>
      <img src="logo.png" class="rounded float-left" alt="logo"></img> 
    </div>       
        <p>
         Sacem group
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
        Elyes 
        Elyes 
        Elyes 

        </p>
        <div>
        <form>
        <div class="form-group">
    <label for="Firstname">First Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="firstname"></input>
  </div>
  <div class="form-group">
    <label for="Lastname">First Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="lastname"></input>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
    <small id="emailHelp" class="form-text text-muted"></small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
  </div>
  
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>
       
      </header>
    </div>
  );
}


export default App;
