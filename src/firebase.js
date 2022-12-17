// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
  appId: process.env.REACT_APP_APP_ID,
}
// const firebaseConfig = {
//   apiKey: 'AIzaSyAYHzumT-efLC3cV3CgPsl4lwa-2mIV2jc',
//   authDomain: 'netflix-react-yt-d0a84.firebaseapp.com',
//   projectId: 'netflix-react-yt-d0a84',
//   storageBucket: 'netflix-react-yt-d0a84.appspot.com',
//   messagingSenderId: '357340468215',
//   appId: '1:357340468215:web:4c73254b2d713e61c5d4f2',
// }

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
