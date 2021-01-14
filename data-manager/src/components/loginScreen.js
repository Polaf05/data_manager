import React, {useState, useEffect} from "react";
import firebase from '../firebase';
import Login from './login';
import Account from './account';

function LoginScreen() {

  //states for constants
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  //handle login
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
        default:
      }

    });
  };

  // handling signup for user
  const handleSignup = () => {
    clearError();
    firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) =>{
      switch(error.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(error.message);
          break;
        case "auth/weak-password":
          setPasswordError(error.message);
          break;
        default:
      }
    });
  };
  //hadles logout functions
  const handleLogout = () => {
    firebase.auth().signOut();
  };

  //use effects to check user states
  useEffect(() =>{
    firebase.auth().onAuthStateChanged((user) =>{
        if(user){
          clear();
          setUser(user);
        }
        else{
          setUser('');
        }
      });
  }, []);
  //clears input
  const clear = () => {
    setEmail('');
    setPassword('');
  };
  //clear error message
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
       handleSignup = {handleSignup}
       hasAccount = {hasAccount}
       setHasAccount = {setHasAccount}
       emailError = {emailError} 
       passwordError = {passwordError}
       />
      )}
    </div>
  );
}

export default LoginScreen;
