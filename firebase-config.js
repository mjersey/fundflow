import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBVd2XQ8DS8dN9rDog6ajXhm6xOYWAtOB8",
    authDomain: "fundflow-f3a7a.firebaseapp.com",
    projectId: "fundflow-f3a7a",
    storageBucket: "fundflow-f3a7a.firebasestorage.app",
    messagingSenderId: "603384890474",
    appId: "1:603384890474:web:a4821070e416ad6bff3613"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, app };