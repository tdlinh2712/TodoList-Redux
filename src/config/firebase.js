import firebase from 'firebase';
import uuid from 'uuid/v4';
//import {updateDragThunk}  from '../actions/listsActions';
const config = {
    apiKey: "AIzaSyBXcODWkpEcUDrysnHHBFUEcFN27UkvUYE",
    authDomain: "todo-app-react-d63f8.firebaseapp.com",
    databaseURL: "https://todo-app-react-d63f8.firebaseio.com",
    projectId: "todo-app-react-d63f8",
    storageBucket: "todo-app-react-d63f8.appspot.com",
    messagingSenderId: "694457276641",
    appId: "1:694457276641:web:a5fccf38ecfd2649f7bfa0",
    measurementId: "G-TXD87QFSWV"
  };
firebase.initializeApp(config);
const database = firebase.database();
