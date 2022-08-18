import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD09qlVr6UnH8jm4jEl9ZU5LGsV5BbW_Hs',
  authDomain: 'mymoney-66c94.firebaseapp.com',
  projectId: 'mymoney-66c94',
  storageBucket: 'mymoney-66c94.appspot.com',
  messagingSenderId: '861026753137',
  appId: '1:861026753137:web:15510b8761ebf6563a59d0',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

const timeStamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timeStamp };
