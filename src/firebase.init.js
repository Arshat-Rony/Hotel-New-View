// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQz-DOiT4r1NM0OJR1eUzDK0SLb5nAxxk",
    authDomain: "hotel-new-view.firebaseapp.com",
    projectId: "hotel-new-view",
    storageBucket: "hotel-new-view.appspot.com",
    messagingSenderId: "691492758743",
    appId: "1:691492758743:web:c4aec8b3de754645cd7c92"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;

