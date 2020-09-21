import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeFirebaseApp = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}

export const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    return firebase.auth().signInWithPopup(provider).then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        return signedInUser;

    }).catch(function (error) {
        // Handle Errors here.
        const errorMessage = error.message;
        // The email of the user's account used.
        const newInfo = {};
        newInfo.error = errorMessage;
        return newInfo
    });
}

export const handleFacebookSignIn = () => {
    const provider = new firebase.auth.FacebookAuthProvider();

    return firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        return signedInUser;

    }).catch(function (error) {
        // Handle Errors here.
        const errorMessage = error.message;
        // The email of the user's account used.
        const newInfo = {};
        newInfo.error = errorMessage;
        return newInfo
    });
}

export const createUserWithEmailAndPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            const newInfo = res.user;
            newInfo.error = "";
            const { email, error } = newInfo
            const signedInUser = {
                name: name,
                email,
                error
            }
            updateProfileName(name);
            return signedInUser;


        })
        .catch(function (error) {
            // Handle Errors here.
            const errorMessage = error.message;
            const newInfo = {};
            newInfo.error = errorMessage;
            return newInfo;
        });
}

export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            const signedInUser = {
                name: res.user.displayName,
                email: email
            };
            return signedInUser;
        })
        .catch(function (error) {
            // Handle Errors here
            const errorMessage = error.message;
            const newInfo = {};
            newInfo.error = errorMessage;
            return newInfo;
        });
}

export const handleSignOut = () => {
    return firebase.auth().signOut()
        .then(res => {
            return {};
        }).catch(function (error) {
            // An error happened.
        });
}

const updateProfileName = (name) => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: name
    }).then(function () {
        // Update successful.
    }).catch(function (error) {
        // An error happened.
    })
}