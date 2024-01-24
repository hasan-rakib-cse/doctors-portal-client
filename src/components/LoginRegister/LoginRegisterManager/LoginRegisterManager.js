import React from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    sendEmailVerification,
    sendPasswordResetEmail
} from "firebase/auth";

import firebaseConfig from './firebase.config';

firebase.initializeApp(firebaseConfig)


export const initializeLoginFramework = () => {
    if(!firebase.app.length === 0) {
        firebase.initializeApp(firebaseConfig)
    }
}

const auth = getAuth();

// Sign In with Google
export const handleGoogleSignIn = () => {

    const googleProvider = new GoogleAuthProvider();

    return signInWithPopup(auth, googleProvider)
        .then((result) => {
            const { displayName, photoURL, email } = result.user;
            const signedInUser = {
                isSignin: true,
                name: displayName,
                email: email,
                photo: photoURL,
                success: true
            }
            setUserToken();
            return signedInUser;

        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);

            console.log(errorCode, errorMessage, email, credential);
        })
}

// Set Token
const setUserToken = () => {
    firebase.auth().currentUser.getIdToken(true).then(function (idToken) {
        sessionStorage.setItem('token', idToken);
    }).catch(function (error) {

    });
}

// Sign Out
export const handleSignOut = () => {
    return signOut(auth).then((res) => {
        const signedOutUser = {
            isSignedIn: false,
            name: '',
            email: '',
            photo: '',
            error: '',
            success: false
        }
        return signedOutUser;
    }).catch((error) => {

    });
}

// Sign Up with Email & Password
export const createUserWithEmailPassword = (name, email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            updateUserName(name);
            verifyEmail();
            return newUserInfo;

        }).catch((error) => {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;
        });
}

// Update a user's profile with Email & Password
const updateUserName = (name) => {
    updateProfile(auth.currentUser, {
        displayName: name
    }).then(() => {
        alert("user name updated successfully")
    }).catch((error) => {
        console.log(error)
    });
}

// Send a user a verification email for new User
const verifyEmail = () => {

    sendEmailVerification(auth.currentUser)
        .then(() => {
            // Email verification sent!
            // ...
        });
}

// Send a password reset email
export const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email)
        .then(() => {
            // Password reset email sent!
            // ..
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}


// Sign In with Email & Password
export const signInWithEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
            // Signed in 
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            return newUserInfo;

        }).catch((error) => {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;
        });
}