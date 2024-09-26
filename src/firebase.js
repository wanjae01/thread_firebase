import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyDIq2kwLPPp7p7KnoHYif_PTNpkz5NpEbA",
 authDomain: "thread-2fb69.firebaseapp.com",
 projectId: "thread-2fb69",
 storageBucket: "thread-2fb69.appspot.com",
 messagingSenderId: "313965982809",
 appId: "1:313965982809:web:e0977ce4ad49f36c346d48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 우리 프로젝트에 대한 인증 서비스를 사용하겠다라는 의미
export const auth = getAuth(app);
// 우리 프로젝트에 대한 데이터베이스 서비스를 사용하겠다라는 의미
export const db = getFirestore(app);