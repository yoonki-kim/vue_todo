// ---------------------------------
// Version 8 SDK => Version 9 compat
// ---------------------------------
// import Vue from 'vue'
// import firebase from 'firebase/compat/app'
// import 'firebase/compat/auth'
// import 'firebase/compat/database'
// import 'firebase/compat/firestore'
// import firebaseConfig from '../../firebaseConfig'

// firebase.initializeApp(firebaseConfig)

// Vue.prototype.$firebase = firebase

// ---------------------------------
// Version 9 SDK
// ---------------------------------
// import Vue from 'vue'
import { initializeApp } from 'firebase/app'
import firebaseConfig from '../../firebaseConfig'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'

const firebaseApp = initializeApp(firebaseConfig)

export const auth = getAuth()
auth.languageCode = 'ko'
connectAuthEmulator(auth, 'http://localhost:9099')

export const db = getFirestore(firebaseApp)
connectFirestoreEmulator(db, 'localhost', 5002)

// Vue.prototype.$firebase = firebaseApp
// Vue.prototype.$firebase = db
