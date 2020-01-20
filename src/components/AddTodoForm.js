import React, { Component, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import {addTodo} from '../actions/action';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  }
}));

const AddTodoForm = ({dispatch}) => {
  const classes = useStyles();
  const [todoContent,setTodoContent] = useState("");
  const handleUserInput = (e) => {
    setTodoContent(e.target.value);
  }
  const writeTodo = () =>
  {
    if(todoContent) {
      dispatch(addTodo(todoContent));
      setTodoContent("");
    }
  }
  return (
      <div>
        <TextField id="filled-basic" placeholder="Write a new note..." value={todoContent} onChange={handleUserInput} />
        <Fab size="medium" color="secondary" aria-label="add" className={classes.margin} onClick={writeTodo}>
          <AddIcon />
        </Fab>
      </div>
  );
}
export default connect()(AddTodoForm);
