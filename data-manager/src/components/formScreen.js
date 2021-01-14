import React, {useState} from "react";
import firebase from '../firebase';
import Forms from './forms'

function FormScreen()
{ 
    // States for variable
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');
    const [role, setRole] = useState('');
    const [income, setIncome] = useState(0);
    

    // function to insert to firestore
    const addCollection = () => {
        firebase.firestore().collection("users").add({
            name: name,
            address: address,
            age: age,
            sex: sex,
            role:role,
            income:income

        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    };

    return(
        <div>
            {/* components to call for forms.js */}
            <Forms 
            name= {name}
            address = {address}
            age= {age}
            sex= {sex}
            role= {role}
            income= {income}
            setName = {setName}
            setAddress = {setAddress}
            setAge = {setAge}
            setSex = {setSex}
            setRole = {setRole}
            setIncome = {setIncome}
            addCollection = {addCollection}
            ></Forms>
        </div>
    );
}

export default FormScreen;