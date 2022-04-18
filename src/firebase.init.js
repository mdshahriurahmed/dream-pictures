// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2GsfOghqsX-ivL2xsY49SCXEeNxbqR-s",
    authDomain: "dream-pictures.firebaseapp.com",
    projectId: "dream-pictures",
    storageBucket: "dream-pictures.appspot.com",
    messagingSenderId: "1031832337789",
    appId: "1:1031832337789:web:9e2ff108d990e4f96ba014"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;