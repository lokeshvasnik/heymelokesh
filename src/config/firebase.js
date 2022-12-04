import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// Importing firebase stuff

// Something Private
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_KEY,
  projectId: 'portfolio-2d224',
  storageBucket: 'portfolio-2d224.appspot.com',
  messagingSenderId: '614958110750',
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// * Init services
