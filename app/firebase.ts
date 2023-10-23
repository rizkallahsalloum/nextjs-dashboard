// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDV1-aDSl3_RMMVbDpqj4-6wFfUjLrXaF4',
  authDomain: 'nextjs-dashboard-fe729.firebaseapp.com',
  projectId: 'nextjs-dashboard-fe729',
  storageBucket: 'nextjs-dashboard-fe729.appspot.com',
  messagingSenderId: '608027709227',
  appId: '1:608027709227:web:201f72593d5b9ddded7f6e',
  measurementId: 'G-0T4CM8911D',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
