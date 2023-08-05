// Import the functions you need from the SDKs you need
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    getDoc,
    collection,
    where,
    addDoc,
    updateDoc,
    setDoc,
    doc,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyAqJK3QlkUQhW5vuHz3q-20yh6kJJG3Dt8",
    authDomain: "fir-auth-article-ae547.firebaseapp.com",
    projectId: "fir-auth-article-ae547",
    storageBucket: "fir-auth-article-ae547.appspot.com",
    messagingSenderId: "718337691443",
    appId: "1:718337691443:web:a89b6e38efcd672cbaf846",
    measurementId: "G-51BLNEHZC0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);


const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,  
        name: user.displayName,
        authProvider: "google",
        email: user.email,
        favorite: [],
      });
    }
  } catch (err) {
    console.error(err);
    // alert(err.message);
  }
};

const addFavorite = async (movie) => {
  try {
    // const q = query(collection(db, "users"), where("email", "==", email));
    const docRef = doc(db, "users", "5LHGul7GzA8SimpSOUwA");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      await updateDoc(doc(db, "users", "5LHGul7GzA8SimpSOUwA"), {
        favorite: [movie]
      });
    }
  } catch (err) {
    console.error(err);
    // alert(err.message);
  }
};

const getFavorite = async (name) => {
  try {
    const docRef = doc(db, "users", "K8f3XyY5pHZTBEe4Utvh");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log(docSnap.data())
    }
  } catch (err) {
    console.error(err);
    // alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      // alert(err.message);
    }
  };



  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };



  const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      // alert(err.message);
    }
  };


  const logout = () => {
    signOut(auth);
  };

  export {
    auth,
    db,
    signInWithGoogle,
    addFavorite,
    getFavorite,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
  };
  