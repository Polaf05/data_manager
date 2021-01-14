import React from 'react';

const login = (props) => {

    //props declaration
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError
    } = props;

    return(
        <section className="login">
            <div className="loginContainer">
                <h1>Data Manager</h1> 
                
                <label>Email</label>
                <input type="text" autoFocus required value={email} onChange= {(e) => setEmail(e.target.value)} placeholder="Enter Email Address"/>
                <p className="errorMsg">{emailError}</p>
                
                <label>Password</label>
                <input type="password" autoFocus required value={password} onChange= {(e) => setPassword(e.target.value)} placeholder="Enter Password"/>
                <p className="errorMsg">{passwordError}</p>

                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <button onClick={handleLogin}>Sign In</button>
                            <p>Don't have an account?
                                <span onClick={()=> setHasAccount(!hasAccount)}>Sign Up</span>
                            </p>
                        </>
                    ) : (
                        <>
                            <button onClick={handleSignup}>Sign Up</button>
                            <p>Have an account?
                                <span onClick={()=> setHasAccount(!hasAccount)}>Sign In</span>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

export default login;