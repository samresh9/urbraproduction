import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPnD5_t-13P4Cw3u7vKWNd02Sz082un2U",
  authDomain: "urbaradata2.firebaseapp.com",
  projectId: "urbaradata2",
  storageBucket: "urbaradata2.appspot.com",
  messagingSenderId: "544918810375",
  appId: "1:544918810375:web:3b554315f5a8cdbf04dfa2",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
