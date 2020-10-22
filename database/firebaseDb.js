/**
 * Created by HP on 10/12/2020.
 */
import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCGFYpdKHXbOYLf9V_ReZ3XjUS7Kd9nGwQ",
    authDomain: "expofirebase-58eb7.firebaseapp.com",
    databaseURL: "https://expofirebase-58eb7.firebaseio.com",
    projectId: "expofirebase-58eb7",
    storageBucket: "expofirebase-58eb7.appspot.com",
    messagingSenderId: "388435747028",
    appId: "1:388435747028:web:8d962f57ac6888b3421b41",
    measurementId: "G-J9G82J4VS3"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;