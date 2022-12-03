import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// Importing firebase stuff

// Something Private
const firebaseConfig = {
  apiKey: 'AIzaSyC65STYfQPM2JkTF3gIuUaFrhYwrfMoszI',
  authDomain: 'portfolio-2d224.firebaseapp.com',
  projectId: 'portfolio-2d224',
  storageBucket: 'portfolio-2d224.appspot.com',
  messagingSenderId: '614958110750',
  appId: '1:614958110750:web:ed8eff3e9a87b95edd760f',
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// * Init services
