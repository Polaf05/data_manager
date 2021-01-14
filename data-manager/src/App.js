import './App.css';
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import login from './components/loginScreen'
import home from './components/home'

function App() {
  
  return (
    <BrowserRouter>
      <div>
          <Route path='/login' component={login}></Route>
          <Route exact path='/' component={home}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
