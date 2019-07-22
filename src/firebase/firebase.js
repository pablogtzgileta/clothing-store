import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAlr04JhZDUGzej02AI5i_MKhwVl_TpziM",
    authDomain: "clth-db.firebaseapp.com",
    databaseURL: "https://clth-db.firebaseio.com",
    projectId: "clth-db",
    storageBucket: "",
    messagingSenderId: "309856361255",
    appId: "1:309856361255:web:f228f9a1b6c3da56"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promp: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// In case we want the whole library
export default firebase;
