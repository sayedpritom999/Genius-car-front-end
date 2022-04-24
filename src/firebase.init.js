// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyAt9Ir9iiurRGmcnoEzV4TE2jd3pS6Z6as",
  // authDomain: "genius-car-services-73372.firebaseapp.com",
  // projectId: "genius-car-services-73372",
  // storageBucket: "genius-car-services-73372.appspot.com",
  // messagingSenderId: "361209248499",
  // appId: "1:361209248499:web:9204331555e49da9a49586"
  
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;

