import React from "react";

const Account = (props) => {

    const {handleLogout} = props;

    return(
        <section className="login">
            <button onClick={handleLogout}>Logout</button>
        </section>
    )
}

export default Account;