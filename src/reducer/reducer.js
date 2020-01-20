import {v4} from 'node-uuid';

const testState = {
  notCompleted:[
    {id:"0", content:"sleep"},
    {id:"1", content:"study"},
    {id:"2", content:"eat"},
  ],
  completed: [
    {id:"3", content:"sleep"},
    {id:"4", content:"study"},
    {id:"5", content:"eat"},
  ]
}

const findIndex = (list,ID) => {
  for( var i=0;i<list.length;i++) {
    if(list[i].id===ID) {
      return i;
    }
  }
  return -1;
}

export default (state = {notCompleted:[],completed:[],userId: v4()}, action) => {
 switch (action.type) {
  case 'ADD_TODO':
    const newTodo = {id:action.payload.todoID,content:action.payload.todoContent};
    const newNotCompletedList = [...state.notCompleted,newTodo];
    return {...state,notCompleted:newNotCompletedList};

  case 'DELETE_TODO':
    let index;
    //find list to delete
    let listToDelete = action.payload.completed ? state.completed : state.notCompleted;
    let afterDeleteTodo = listToDelete.map((todo,i) => {
      if(todo.id===action.payload.todoID) {
        index=i;
      }
      return todo;
    });
    afterDeleteTodo.splice(index,1);
    if(action.payload.completed) {
      return {...state,completed:afterDeleteTodo};
    } else {
      return {...state,notCompleted:afterDeleteTodo};
    }

  case 'SET_COMPLETE':
  let listToRemove,listToAdd;
  if(action.payload.newCompleteStatus) {
    listToRemove = state.notCompleted;
    listToAdd = state.completed;
  } else {
    listToRemove = state.completed;
    listToAdd = state.notCompleted;
  }
  let ind;
  listToRemove = listToRemove.map((todo,i)=> {
    if(todo.id===action.payload.todoID) {
      ind=i;
    }
    return todo;
  })
  let todo = listToRemove.splice(ind,1);
  listToAdd = [...listToAdd,todo[0]]
  if(action.payload.newCompleteStatus) {
    return {...state,completed:listToAdd,notCompleted:listToRemove};
  } else {
    return {...state,completed:listToRemove,notCompleted:listToAdd};
  }

  case 'EDIT_TODO':
    const {todoID,completeStatus,newContent} = action.payload;
    let listToEdit = state.notCompleted;
    if(completeStatus) {
      listToEdit = state.completed;
    }
    let editIndex;
    listToEdit = listToEdit.map((todo,i) => {
      if(todo.id===todoID) {
        editIndex=i;
      }
      return todo;
    })
    listToEdit[editIndex].content = newContent;

    if(!completeStatus) {
      return {...state,notCompleted:listToEdit};
    } else {
      return {...state,completed:listToEdit};
    }

  case 'FETCH_STATE':
    console.log(action.payload);
    return action.payload;

  default:
   return state
 }
}
