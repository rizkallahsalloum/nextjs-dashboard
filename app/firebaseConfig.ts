import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDV1-aDSl3_RMMVbDpqj4-6wFfUjLrXaF4',
  authDomain: 'nextjs-dashboard-fe729.firebaseapp.com',
  projectId: 'nextjs-dashboard-fe729',
  storageBucket: 'nextjs-dashboard-fe729.appspot.com',
  messagingSenderId: '608027709227',
  appId: '1:608027709227:web:201f72593d5b9ddded7f6e',
  measurementId: 'G-0T4CM8911D',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
