export const simpleAction = () => dispatch => {
 dispatch({
  type: 'SIMPLE_ACTION',
  payload: 'result_of_simple_action'
 })
}

export const addTodo = (content) => {
  return {
    type:'ADD_TODO',
    payload:content,
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
