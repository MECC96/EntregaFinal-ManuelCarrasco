import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMhqRE4FbI0gwzTV_rvzXV_aiWqUgtYW4",
  authDomain: "alborder-14402.firebaseapp.com",
  projectId: "alborder-14402",
  storageBucket: "alborder-14402.appspot.com",
  messagingSenderId: "939595608996",
  appId: "1:939595608996:web:414da40f7ae70ac159c731"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

