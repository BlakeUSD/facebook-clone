import firebase from "firebase"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCIDNrsoUFkHjZ8dzBwXhLvSYJc0fe9wlE",
    authDomain: "facebook-clone-eea18.firebaseapp.com",
    projectId: "facebook-clone-eea18",
    storageBucket: "facebook-clone-eea18.appspot.com",
    messagingSenderId: "75242891072",
    appId: "1:75242891072:web:20e5932fe6677ed6c9fca5"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = app.firestore();
const storage = firebase.storage();

export { db, storage }