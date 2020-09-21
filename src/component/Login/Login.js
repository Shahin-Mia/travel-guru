import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
import './Login.css';
import googleIcon from '../../image/Icon/google1.png';
import facebookIcon from '../../image/Icon/Group2.png';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { createUserWithEmailAndPassword, handleFacebookSignIn, handleGoogleSignIn, initializeFirebaseApp, signInWithEmailAndPassword } from './firebaseMethods';




const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: "",
        passwordError: "",
        confirmationError: false,
        emailError: "",
        error: ""
    });

    initializeFirebaseApp();

    const handleBlur = event => {
        if (event.target.name === "password") {
            const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g;
            if (!regex.test(event.target.value)) {
                const dangerText = <Form.Text className="text-danger">Please Fulfill The requirements !</Form.Text>
                const newPass = { ...userInfo };
                newPass.passwordError = dangerText;
                setUserInfo(newPass);
            }
            else {
                const newPass = { ...userInfo };
                newPass.password = event.target.value;
                newPass.passwordError = "";
                setUserInfo(newPass);
            }
        }
        if (event.target.name === "email") {
            const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi
            if (!regex.test(event.target.value)) {
                const dangerText = <Form.Text className="text-danger">Email address is not valid!</Form.Text>
                const newPass = { ...userInfo };
                newPass.emailError = dangerText;
                setUserInfo(newPass);
            }
            else {
                const newPass = { ...userInfo };
                newPass.email = event.target.value;
                newPass.emailError = "";
                setUserInfo(newPass);
            }
        }
        if (event.target.name === "fname") {
            const newInfo = { ...userInfo };
            newInfo.name = event.target.value;
            setUserInfo(newInfo);

        }
    }
    console.log(userInfo)

    const handleSubmit = (e) => {
        if (newUser && userInfo.email && userInfo.password && userInfo.name) {
            createUserWithEmailAndPassword(userInfo.name, userInfo.email, userInfo.password)
                .then(res => {
                    responseHandler(res)
                })
        }
        if (!newUser && userInfo.email && userInfo.password) {
            signInWithEmailAndPassword(userInfo.email, userInfo.password)
                .then(res => {
                    responseHandler(res)
                })
        }
        e.preventDefault();
    }


    const handleConfirmPassword = event => {
        if (userInfo.password !== event.target.value) {
            const newPass = { ...userInfo };
            newPass.confirmationError = true;
            setUserInfo(newPass);
        }
        else {
            const newPass = { ...userInfo };
            newPass.confirmationError = false;
            setUserInfo(newPass);
        }
    }

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                responseHandler(res)
            })

    }


    const fbSignIn = () => {
        handleFacebookSignIn()
            .then(res => {
                responseHandler(res)
            })
    }

    if (loggedInUser.email) {
        history.replace(from);
    }

    const responseHandler = (res) => {
        setLoggedInUser(res);
        setUserInfo(res);
    }

    return (
        <div>
            <Navigation></Navigation>
            <div className="login-form">
                <Form onSubmit={handleSubmit}>
                    <h2>{newUser ? "Create new Account" : "Login"}</h2>
                    <br />
                    {newUser && <Form.Group controlId="formBasicEmail">
                        <input className="custom-input" type="text" onBlur={handleBlur} name="fname" placeholder="First Name" required />
                    </Form.Group>}
                    {newUser && <Form.Group controlId="formBasicEmail">
                        <input className="custom-input" type="text" name="lname" placeholder="Last Name" required />
                    </Form.Group>}
                    <Form.Group controlId="formBasicEmail">
                        <input className="custom-input" onBlur={handleBlur} type="email" name="email" placeholder="Username or Email" required />
                        <Form.Text className="text-muted">
                            {userInfo.emailError}
                        </Form.Text>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <input className="custom-input" type="password" onBlur={handleBlur} name="password" placeholder="Password" required />
                        {newUser && <Form.Text className="text-muted">- at least 8 characters
                        - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
                        - Can contain special characters</Form.Text>}
                        {userInfo.passwordError}
                    </Form.Group>
                    {newUser && <Form.Group controlId="formBasicPassword">
                        <input className="custom-input" type="password" onBlur={handleConfirmPassword} name="confirmPassword" placeholder="Confirm Password" required />
                    </Form.Group>}
                    {userInfo.confirmationError && <Form.Text className="text-danger">Passwords doesn't matched! Please Check again.</Form.Text>}
                    {!newUser && <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>}
                    <button type="submit" disabled={userInfo.confirmationError} className="submit-btn">{newUser ? "Sign Up" : "Login"}</button>
                </Form>
                <p className="text-center mt-3 text-danger">{userInfo.error}</p>
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
                        <button className="facebook-login" onClick={fbSignIn}>Continue with Facebook</button>
                    </div>
                    <div className="login-button">
                        <img src={googleIcon} alt="google" className="google" />
                        <button className="google-login" onClick={googleSignIn}>Continue with Google</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;