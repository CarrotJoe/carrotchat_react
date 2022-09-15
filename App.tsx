import * as React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}

const firebaseConfig = {
  apiKey: 'AIzaSyBScIsi0Me_3rpfqCds-Q7M7wiW9oBIUlg',
  authDomain: 'carrotchat-d4b3b.firebaseapp.com',
  projectId: 'carrotchat-d4b3b',
  storageBucket: 'carrotchat-d4b3b.appspot.com',
  messagingSenderId: '606350056623',
  appId: '1:606350056623:web:eb75580b253a74b34b085a',
  measurementId: 'G-PBNB7MSH4H',
};

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

import { getAuth, signOut } from 'firebase/auth';

signOut(auth)
  .then(() => {
    // Sign-out successful.
  })
  .catch((error) => {
    // An error happened.
  });
