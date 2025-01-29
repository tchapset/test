//* Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';

//* Add the Web App's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmI_PuM9W1Aeg24Y9hEYiO1d3tS1X-CvI",
  authDomain: "test-5ef80.firebaseapp.com",
  projectId: "test-5ef80",
  storageBucket: "test-5ef80.firebasestorage.app",
  messagingSenderId: "180962567351",
  appId: "1:180962567351:web:e6f40d790b5757dd831932",
  measurementId: "G-NBJ45KKXVP",
};

//* Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

//* Initialize Firebase Auth and set persistence
const auth = getAuth(firebase_app);
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Session persistence set to LOCAL");
  })
  .catch((error) => {
    console.error("Failed to set session persistence:", error);
  });

export { auth };
export default firebase_app;
