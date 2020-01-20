import database from '../config/firebase';
import thunkMiddleware from 'redux-thunk';
import {moveFbRecord}  from '../config/firebase';

export const fetchState = state => {
    return {
      type: "FETCH_STATE",
      payload: state,
    };
  }

/**
 * THUNKS
 */
 //map state from firebase
export function getStateThunk() {
  return dispatch => {
    const state = {completed:[],notCompleted:[]};
    const ref = database.ref('/');
    database.ref(`/`).once('value', snap => {
          const value = snap.val();
          if(value.completed) {
            const todoArray=Object.values(value.completed);
            state.completed = todoArray;
          }
          if(value.notCompleted) {
            const todoArray=Object.values(value.notCompleted);
            state.notCompleted = todoArray;
          }
      })
    .then(() => dispatch(fetchState(state)))
  }
}


export const addTodo = (todoContent,todoID) => {
  return {
    type:'ADD_TODO',
    payload:{todoContent,todoID}
  }
}

export const deleteTodo = (todoID,completed) => dispatch => {
  dispatch({
    type: 'DELETE_TODO',
    payload: {todoID,completed}
  })
}

export const setComplete = (todoID,newCompleteStatus) => dispatch => {
  dispatch({
    type: 'SET_COMPLETE',
    payload: {todoID,newCompleteStatus}
  })
}

export const editTodo = (todoID,completeStatus,newContent) => dispatch => {
  dispatch({
    type: 'EDIT_TODO',
    payload: {todoID,completeStatus,newContent}
  })
}
