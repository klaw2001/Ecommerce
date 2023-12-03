import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, Timestamp } from "firebase/firestore";

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";
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
const fireDB = getFirestore(firebaseApp);
const firebaseAuth = getAuth(firebaseApp);
export const useFirebase = () => useContext(FirebaseContext);
export const FirebaseProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
  //     if (user) {
  //       setCurrentUser(user);
  //     } else {
  //       setCurrentUser(null);
  //     }
  //   });

  //   // Cleanup function to unsubscribe when the component unmounts
  //   return () => unsubscribe();
  // }, []);
  const signUpUser = async (name, email, password, e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );

      const user = {
        name: name,
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        time: Timestamp.now(),
      };

      const userRef = collection(fireDB, "users");
      await addDoc(userRef, user);

      toast.success("Signup Successfully");
      setLoading(false);
    } catch (error) {
      setLoading(false);

      console.error("Error signing up:", error.message);
      throw error;
    }
  };
  const signin = (email, password, e) => {
    e.preventDefault();
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  };
  const signOut = () => {
    localStorage.clear("user");
    return firebaseAuth.signOut();
  };
  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });
  const addProduct = async () => {
    if (
      products.title == null ||
      products.price == null ||
      products.imageUrl == null ||
      products.category == null ||
      products.description == null
    ) {
      return toast.error("all fields are required");
    }

    setLoading(true);

    try {
      const productRef = collection(fireDB, "products");
      await addDoc(productRef, products);
      toast.success("Add product successfully");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 800);
      getProductData();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    // setProducts("")
  };

  const [product, setProduct] = useState([]);

  const getProductData = async () => {
    setLoading(true);

    try {
      const q = query(collection(fireDB, "products"), orderBy("time"));

      const data = onSnapshot(q, (QuerySnapshot) => {
        let productArray = [];
        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productArray);
        setLoading(false);
      });

      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <FirebaseContext.Provider
      value={{
        currentUser,
        signUpUser,
        signin,
        signOut,
        loading,
        setLoading,
        getProductData,
        addProduct,
        product,
        products,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
