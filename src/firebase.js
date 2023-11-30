// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrY4e4BPSV-jqWgZk9SKuLJHkbI4l6ECQ",
  authDomain: "my-app-9a5f8.firebaseapp.com",
  projectId: "my-app-9a5f8",
  storageBucket: "my-app-9a5f8.appspot.com",
  messagingSenderId: "153100394257",
  appId: "1:153100394257:web:4caf25eba82d26c1de36b0",
  databaseURL:"https://my-app-9a5f8-default-rtdb.firebaseio.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);