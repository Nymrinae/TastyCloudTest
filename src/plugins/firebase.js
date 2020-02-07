import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

/* const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.FIREBASE_DATABASEURL,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
  appId: process.env.FIREBASE_APPID
} */

const firebaseConfig = {
  apiKey: "AIzaSyAYuke26RPcrKLhhk1FubqQcxs5daMji8A",
  authDomain: "tastycloudtest.firebaseapp.com",
  databaseURL: "https://tastycloudtest.firebaseio.com",
  projectId: "tastycloudtest",
  storageBucket: "tastycloudtest.appspot.com",
  messagingSenderId: "129943216835",
  appId: "1:129943216835:web:e82d8b0bd36f495e503876"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const db = firebase.firestore()

export default firebase
