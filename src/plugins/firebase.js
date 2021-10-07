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
import Vue from 'vue'
import { initializeApp } from 'firebase/app'
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
import { getFirestore } from 'firebase/firestore/lite'
import firebaseConfig from '../../firebaseConfig'
import { getAuth, connectAuthEmulator } from 'firebase/auth'

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)

export const auth = getAuth()
auth.languageCode = 'ko'

connectAuthEmulator(auth, 'http://localhost:9099')

Vue.prototype.$firebase = firebaseApp
Vue.prototype.$firebase = db
