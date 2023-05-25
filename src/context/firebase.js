// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCWn2tEOPJ5pVPDemGekFVVwHgMr_mbveI',
  authDomain: 'auth-75bf6.firebaseapp.com',
  projectId: 'auth-75bf6',
  storageBucket: 'auth-75bf6.appspot.com',
  messagingSenderId: '750818109320',
  appId: '1:750818109320:web:7a1bdb886cfdcb6ef63c3d'
}

export const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }
