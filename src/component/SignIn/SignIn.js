import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { useHistory, useLocation } from "react-router";
import "./SignIn.css";
import { UserContext } from "../../App";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    photo: "",
    error: "",
    success: false,
  });
  const [loginUser, setLoginUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const provider = new firebase.auth.GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        var { displayName, photoURL, email } = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setLoginUser(signedInUser);
        history.replace(from);
      });
  };

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }

    if (isFieldValid) {
      const isSignedIn = { ...user };
      isSignedIn[e.target.name] = e.target.value;
      setUser(isSignedIn);
    }
  };
  const handleSubmit = (e) => {
    if (user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const isSignedIn = {...user};
          isSignedIn.error = '';
          isSignedIn.success = true;
          setUser(isSignedIn);
          updateUserName(user.name);
          // history.replace(from);
        })
        .catch((error) => {
          const isSignedIn = { ...user };
          isSignedIn.error = error.message;
          isSignedIn.success = false
          setUser(isSignedIn);
        });
    }
    e.preventDefault();
  };
    const updateUserName = name => {
      const user = firebase.auth().currentUser;

      user.updateProfile({
        displayName: name,
      }).then(function() {
        console.log("user name update successfully");
      }).catch(function(error) {
        console.log(error);
      });
    }

  return (
    <>
        <form className="p-5 container signIn-form" onSubmit={handleSubmit}>
            <h3 className="pb-4">Sign In</h3>
            <input type="text" className = "form-control" onBlur={handleBlur} name="name" placeholder="Your Name" required id=""/>
            <br/>
            <input type="email" className = "form-control" onBlur={handleBlur} name="email" placeholder="Your Email" required id=""/>
            <br/>
            <input type="password" className = "form-control" onBlur={handleBlur} name="password" placeholder="Password" required id=""/>
            <br/>
            <input className = "form-control signIn-button" type="submit" value="Submit"/>
            
            <br/>
            <p>Already have an account? <Link className="link-style" to="/login">Create an account</Link></p>
            <p style={{color: 'red'}}>{user.error}</p>
            { user.success && <p style={{color: 'green'}}>User Create a Successfully!</p>}
        </form>
        <br/>
        <div className="text-center">
             <button className="google-button rounded-pill" onClick={handleGoogleSignIn}>Google Sign In</button>
        </div>
    </>
  );
};

export default SignIn;
