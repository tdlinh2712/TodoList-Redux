import firebase from 'firebase';
import {v4} from 'node-uuid';
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

export const addTodoToFirebase = (content) => {
  //this will give us a unique id for our tasks
  const id = Date.now();
  database.ref(`/notCompleted/${id}`).set({
    content,id
  })
  return id;
}

export const deleteTodoFromFirebase = (todoID,completed) => {
    if(completed) {
      database.ref(`/completed/${todoID}`).remove();
    } else {
      database.ref(`/notCompleted/${todoID}`).remove();
    }
}

export const editTodoContentInFirebase = (todoID,completeStatus,newContent) => {
    const ref = completeStatus ? "completed":"notCompleted";
    database.ref(`/${ref}/${todoID}`).update({content:newContent});
}

export const changeCompleteStatusInFirebase = (todoID,newCompleteStatus) => {
  //decide which list to move from and to

  const from = newCompleteStatus ? "notCompleted":"completed";
  const to = newCompleteStatus ? "completed":"notCompleted";
  const oldRef = database.ref(`/${from}/${todoID}`);
  const newRef = database.ref(`/${to}/${todoID}`);

  oldRef.once('value', function(snap)  {
        newRef.set( snap.val(), function(error) {
             if( !error ) {  oldRef.remove(); }
             else if( typeof(console) !== 'undefined' && console.error ) {  console.error(error); }
        });
   });
}


export default database;
