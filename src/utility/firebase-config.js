import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFTb-uwBcPykpRus95uAmCsgdyFaGNKtg",
  authDomain: "loginform-d56b8.firebaseapp.com",
  projectId: "loginform-d56b8",
  storageBucket: "loginform-d56b8.appspot.com",
  messagingSenderId: "359593157935",
  appId: "1:359593157935:web:4f4773aea48512ea30edda",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
