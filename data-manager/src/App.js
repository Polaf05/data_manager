import './App.css';
import React, {useState, useEffect} from "react";
import firebase from './firebase';
import Login from './login';
import Account from './account';

function App() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {
    clearError();
    firebase.auth().signInWithEmailAndPassword(email, password).catch((error) =>{
      switch(error.code){
        case "auth/invalid-email":
        case "auth/user-not-found":
          setEmailError(error.message);
          break;
        case "auth/wrong-password":
          setPasswordError(error.message);
          break;
      }

    });
  };

  const handleLogout = () => {
    firebase.auth().signOut();
  };

  const authState = () => {
    firebase.auth().onAuthStateChanged((user) =>{
      if(user){
        clear();
        setUser(user);
      }
      else{
        setUser('');
      }
    });
  };

  useEffect(() =>{
    authState();
  }, []);

  const clear = () => {
    setEmail('');
    setPassword('');
  };
  
  const clearError = () => {
    setEmailError('');
    setPasswordError('');
  };
  
  return (
    <div className="App">
      {user ? (
        <Account handleLogout ={handleLogout} />
      ):(
        <Login 
       email = {email} 
       setEmail = {setEmail} 
       password = {password} 
       setPassword = {setPassword}
       handleLogin = {handleLogin} 
       emailError = {emailError} 
       passwordError = {passwordError}
       />
      )}
       
       
    </div>
  );
}

export default App;
