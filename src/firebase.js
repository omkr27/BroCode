
import firebase from 'firebase/compat/app';
import 'firebase/compat/database'
import "firebase/compat/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBHurO_5lzS-1wYyGKoBqzU3Y02Gdamjr4",
    authDomain: "codeeditor-315d2.firebaseapp.com",
    projectId: "codeeditor-315d2",
    storageBucket: "codeeditor-315d2.appspot.com",
    messagingSenderId: "565594386888",
    appId: "1:565594386888:web:f878168956a881bb27d0fd"
}

const Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase