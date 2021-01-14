import React from 'react';

function forms(props)
{
    //props declaration
    const{
        name,
        address,
        age,
        sex,
        role,
        income,
        setName,
        setAddress,
        setAge,
        setSex,
        setRole,
        setIncome,
        addCollection,
    } = props

    return(
        <section className='login'>
            <div className="loginContainer">
                <h1>Forms</h1> 
                
                <label>Name</label>
                <input type="text" autoFocus required value={name} onChange= {(e) => setName(e.target.value)} placeholder="Enter Email Address"/>
                
                <label>Address</label>
                <input type="text" autoFocus required value={address} onChange= {(e) => setAddress(e.target.value)} placeholder="Enter Email Address"/>
                
                <label>Age</label>
                <input type="text" autoFocus required value={age} onChange= {(e) => setAge(e.target.value)} placeholder="Enter Email Address"/>
                
                <label>Sex</label>
                <select name="sex" required value={sex} onLoad= {(e) => setSex(e.target.value)}>
                <option value="Male">Male</option>
                <option value="Female" autofocus>Female</option>
                </select>

                <label>Roles</label>
                <select name="role" required value={role} onLoad= {(e) => setRole(e.target.value)}>
                <option value="Head of the family">Head of the family</option>
                <option value="Nurturance and Support">Nurturance and Support</option>
                <option value="Breadwinner">Breadwinner</option>
                <option value="Others">Others</option>
                </select>

                <label>Monthly Income</label>
                <input type="text" autoFocus required value={income} onChange= {(e) => setIncome(e.target.value)} placeholder="Enter Email Address"/>
                
                
               

                <div className="btnContainer">
                    <button onClick={addCollection}>Add</button>
                </div>
            </div>
        </section>
    )
}

export default forms;