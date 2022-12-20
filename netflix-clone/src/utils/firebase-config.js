import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBkqAyhELDsYA6tsDgoI_6fGFuus7QXnXA",
    authDomain: "react-netflix-clone-9bc93.firebaseapp.com",
    projectId: "react-netflix-clone-9bc93",
    storageBucket: "react-netflix-clone-9bc93.appspot.com",
    messagingSenderId: "776462914267",
    appId: "1:776462914267:web:8f2b123de1a9cb05e372fe",
    measurementId: "G-XZ7WSZKJ6Q"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);