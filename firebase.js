// import firebase from 'firebase/compat/app';
// import 'firebase/firestore';
// import 'firebase/compat/auth';
// import "firebase/storage"

import  firebase from 'firebase';


import 'firebase/storage';



const firebaseConfig = {
    apiKey: "AIzaSyDIWD54-Nndo2UwgOAXSHPqA-ICi39vjQg",
    authDomain: "facebookclone-6095a.firebaseapp.com",
    projectId: "facebookclone-6095a",
    storageBucket: "facebookclone-6095a.appspot.com",
    messagingSenderId: "432770134565",
    appId: "1:432770134565:web:22cf26fdc80f15c29ec5cc"
  };





const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
const db = firebaseApp.firestore();

const storage = firebase.storage();



export {db,storage}; 