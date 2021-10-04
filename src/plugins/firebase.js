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
import firebaseConfig from '../../firebaseConfig'

const firebase = initializeApp(firebaseConfig)
// const db = getFirestore(firebase)

Vue.prototype.$firebase = firebase
