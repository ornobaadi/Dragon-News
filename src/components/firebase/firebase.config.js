// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5jXPVe2rJ5BWSNmFMbUihHHpHVasbLro",
    authDomain: "dragon-news-a450e.firebaseapp.com",
    projectId: "dragon-news-a450e",
    storageBucket: "dragon-news-a450e.firebasestorage.app",
    messagingSenderId: "763440007901",
    appId: "1:763440007901:web:6a5bd85c29879c700ca934"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;