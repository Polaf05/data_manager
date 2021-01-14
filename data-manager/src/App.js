import './App.css';
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import login from './components/loginScreen';
import home from './components/home';
import signup from './components/formScreen';

function App() {
  
  return (
    <BrowserRouter>
      <div>
              {/* Routes to change pages */}
          <Route path='/login' component={login}></Route>
          <Route path='/forms' component={signup}></Route>
          <Route exact path='/' component={home}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
