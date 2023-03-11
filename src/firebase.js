import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDBxbakooFuR5r-0wKdEHbmQtwC9Le4DJQ",
  authDomain: "question-me-dbd4f.firebaseapp.com",
  databaseURL: "https://question-me-dbd4f-default-rtdb.firebaseio.com",
  projectId: "question-me-dbd4f",
  storageBucket: "question-me-dbd4f.appspot.com",
  messagingSenderId: "238192838320",
  appId: "1:238192838320:web:2c5bbd6a944072b2c99d75",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
