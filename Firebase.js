import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCCvag3f2HJhEKT4xb0L8TuRiOhYIXBcfY",
  authDomain: "atividade-3-dm-ee896.firebaseapp.com",
  databaseURL: "https://atividade-3-dm-ee896-default-rtdb.firebaseio.com",
  projectId: "atividade-3-dm-ee896",
  storageBucket: "atividade-3-dm-ee896.appspot.com",
  messagingSenderId: "879964535392",
  appId: "1:879964535392:web:e37a9eb2b4ce0c24012105"
};
  
export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const contasDB = firebaseApp.database().ref("contas");