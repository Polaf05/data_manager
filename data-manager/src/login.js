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
                <label for="">Email</label>
                <input type="text" autoFocus required value={email} onChange= {(e) => setEmail(e.target.value)} />
                <p className="errorMsg">{emailError}</p>

                <label for="">Password</label>
                <input type="password" autoFocus required value={password} onChange= {(e) => setPassword(e.target.value)} />
                <p className="errorMsg">{passwordError}</p>

                <div className="btnContainer">
                    <button onClick={handleLogin}>Login</button>
                </div>
            </div>
        </section>
    )
}

export default login;