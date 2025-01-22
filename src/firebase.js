import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
const firebaseConfig = {
    apiKey: "AIzaSyA_zO1mLYxz-RTBsAsbOVU78B3EROHru-k",
    authDomain: "netflix-clone-5bf08.firebaseapp.com",
    projectId: "netflix-clone-5bf08",
    storageBucket: "netflix-clone-5bf08.firebasestorage.app",
    messagingSenderId: "593209074281",
    appId: "1:593209074281:web:2401d86cbed710dc4178f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signUp = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user;
        await addDoc(collection(db, 'user'), {
            uid: user.uid,
            name,
            authProvider: 'local',
            email,
        })
    } catch (error) {
        console.log(error);
        toast(error.code.split('/')[1].split('-').join(' '))

    }
}
const logIn = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error);
        toast(error.code.split('/')[1].split('-').join(' '))
    }
}
const logOut = () => {
    signOut(auth)
}
export { auth, db, signUp, logIn, logOut }