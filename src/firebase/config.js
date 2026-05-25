import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

// Firebase configuration
// Note: These values are safe to be public (they're client-side config)
const firebaseConfig = {
  apiKey: "AIzaSyAHjMwP0_C1ROUCEOzFqyNCEBMQITvGIqc",
  authDomain: "skts-attendance-portal.firebaseapp.com",
  projectId: "skts-attendance-portal",
  storageBucket: "skts-attendance-portal.firebasestorage.app",
  messagingSenderId: "764249344216",
  appId: "1:764249344216:web:a45db3f845f4d6e5ebafad",
  measurementId: "G-NGH731RC55",
  databaseURL: "https://skts-attendance-portal-default-rtdb.asia-southeast1.firebasedatabase.app"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getDatabase(app)

console.log('✅ Firebase initialized with Realtime Database')

