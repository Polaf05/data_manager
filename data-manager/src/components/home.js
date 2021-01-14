import React from "react";
import {Link } from "react-router-dom";

function home(){
    return(
        <div className="hero">
            <nav>
              <div>
                <Link to='/'><h2>Resident Data Manager</h2></Link>
              </div>

              <div>
              <Link to='/login'><button>Login</button></Link>
              <Link to='/forms'><button>Sign Up</button></Link>
              </div>
            </nav>
        </div>
    );
}
export default home;