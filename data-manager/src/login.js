import React from 'react';

const login = (props) => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        emailError,
        passwordError
    } = props;

    return(
        <section className="login">
            <div className="loginContainer">
                <h1>LOGIN</h1> 
                
                <input type="text" autoFocus required value={email} onChange= {(e) => setEmail(e.target.value)} placeholder="Email"/>
                <p className="errorMsg">{emailError}</p>
                
                <input type="password" autoFocus required value={password} onChange= {(e) => setPassword(e.target.value)} placeholder="Password"/>
                <p className="errorMsg">{passwordError}</p>

                <div className="btnContainer">
                    <button onClick={handleLogin}>Login</button>
                </div>
            </div>
        </section>
    )
}

export default login;