/*import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_ID",
  appId: "YOUR_APP_ID"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)*/
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDatGTVP_d7M-2ORCO_4KinENhlAWmm03c",
  authDomain: "meattrace-scc.firebaseapp.com",
  projectId: "meattrace-scc",
  storageBucket: "meattrace-scc.firebasestorage.app",
  messagingSenderId: "647310243368",
  appId: "1:647310243368:web:b360c8b1d38c47ac69e71d",
  measurementId: "G-4Q2CKPBB5B"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)