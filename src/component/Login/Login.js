import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
import './Login.css';
import googleIcon from '../../image/Icon/google1.png';
import facebookIcon from '../../image/Icon/Group2.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';




const Login = () => {


    const [newUser, setNewUser] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [password, setPasswords] = useState({});

    const handleBlur = event => {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g;
        if (!regex.test(event.target.value)) {
            const dangerText = <Form.Text className="text-danger">Please Fulfill The requirements !</Form.Text>
            const newPass = {
                password: "",
                passwordError: dangerText
            }
            setPasswords(newPass);
        }
        else {
            const newPass = {
                password: event.target.value,
                passwordError: ""
            }
            setPasswords(newPass);
        }
    }
    const handleConfirmPassword = event => {
        if (password.password !== event.target.value) {
            const dangerText = <Form.Text className="text-danger">Passwords doesn't matched! Please Check again.</Form.Text>
            const newPass = {
                firstPassword: password.password,
                errorMessage: dangerText
            }
            setPasswords(newPass);
        }
    }
    console.log(password)

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }


    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email };
            setLoggedInUser(signedInUser)
            history.replace(from);
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }

    const handleFacebookSignIn = () => {
        const provider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }

    return (
        <div>
            <Navigation></Navigation>
            <div className="login-form">
                <Form>
                    {newUser ? <h1>Create an Account</h1> : <h1>Login</h1>}
                    <br />
                    {newUser && <Form.Group controlId="formBasicEmail">
                        <input className="custom-input" type="text" name="fname" placeholder="First Name" required />
                    </Form.Group>}
                    {newUser && <Form.Group controlId="formBasicEmail">
                        <input className="custom-input" type="text" name="lname" placeholder="Last Name" required />
                    </Form.Group>}
                    <Form.Group controlId="formBasicEmail">
                        <input className="custom-input" type="email" name="email" placeholder="Username or Email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <input className="custom-input" type="password" onBlur={handleBlur} name="password" placeholder="Password" required />
                        {newUser && <Form.Text className="text-muted">- at least 8 characters
                        - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
                        - Can contain special characters</Form.Text>}
                        {password.passwordError}
                    </Form.Group>
                    {newUser && <Form.Group controlId="formBasicPassword">
                        <input className="custom-input" type="password" onBlur={handleConfirmPassword} name="confirmPassword" placeholder="Confirm Password" required />
                        {password.errorMessage}
                    </Form.Group>}
                    {!newUser && <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>}
                    <button type="submit" disabled={password.errorMessage} className="submit-btn">{newUser ? "Sign Up" : "Login"}</button>
                </Form>
                {newUser ? <p className="text-center mt-3">Already have an Account? <button className="toggle-btn" onClick={() => setNewUser(!newUser)}>Login</button></p>
                    : <p className="text-center mt-3">Don't have an Account? <button className="toggle-btn" onClick={() => setNewUser(!newUser)}>Create an Account</button></p>}
            </div>
            <div className="register-option">
                <div className="fancy-line">
                    <div className="line"></div>
                    <h5>Or</h5>
                    <div className="line"></div>
                </div>
                <div className="login-option">
                    <div className="login-button">
                        <img src={facebookIcon} alt="facebook" className="facebook" />
                        <button className="facebook-login" onClick={handleFacebookSignIn}>Continue with Facebook</button>
                    </div>
                    <div className="login-button">
                        <img src={googleIcon} alt="google" className="google" />
                        <button className="google-login" onClick={handleGoogleSignIn}>Continue with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;