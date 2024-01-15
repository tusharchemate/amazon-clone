// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAOjZF2vJG8B5rDPXsqJRhBrIdkWVCx4ww',
  authDomain: 'clone-9d11f.firebaseapp.com',
  projectId: 'clone-9d11f',
  storageBucket: 'clone-9d11f.appspot.com',
  messagingSenderId: '413953751953',
  appId: '1:413953751953:web:b9fe54dc0e9d2662a57830',
  measurementId: 'G-9HXHYBYYPN',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const db = getDatabase(firebaseApp);

const auth = getAuth();
// Function to create a user with email and password
const createUserWithEmailAndPasswordHandler = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log('User created:', user);
      // Additional logic if needed
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error creating user:', errorCode, errorMessage);
      // Additional error handling if needed
    });
};

export { db, auth, createUserWithEmailAndPasswordHandler };
