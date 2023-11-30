import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword ,signOut} from "firebase/auth";
const FirebaseContext = createContext(null);
const firebaseConfig = {
  apiKey: "AIzaSyDrY4e4BPSV-jqWgZk9SKuLJHkbI4l6ECQ",
  authDomain: "my-app-9a5f8.firebaseapp.com",
  projectId: "my-app-9a5f8",
  storageBucket: "my-app-9a5f8.appspot.com",
  messagingSenderId: "153100394257",
  appId: "1:153100394257:web:4caf25eba82d26c1de36b0",
  databaseURL: "https://my-app-9a5f8-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

export const useFirebase = () => useContext(FirebaseContext)
export const FirebaseProvider = (props) => {
    const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    // Cleanup function to unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);
  const signupUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };
  const signin = (email, password , e) => {
    e.preventDefault()
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  };
  const signOut = () => {
    return firebaseAuth.signOut();
  };

  return (
    <FirebaseContext.Provider value={{currentUser,signupUserWithEmailAndPassword,signin,signOut}}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
