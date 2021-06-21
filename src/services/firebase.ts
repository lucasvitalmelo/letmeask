import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCFTiFHDqY0zmzBawHbYaY_69RMqGKeDaA",
  authDomain: "letmeask-nlw-528ce.firebaseapp.com",
  databaseURL: "https://letmeask-nlw-528ce-default-rtdb.firebaseio.com",
  projectId: "letmeask-nlw-528ce",
  storageBucket: "letmeask-nlw-528ce.appspot.com",
  messagingSenderId: "829833735018",
  appId: "1:829833735018:web:df54be32f567ba35515313",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();