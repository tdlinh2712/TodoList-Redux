import React, { Component, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import {addTodo} from '../actions/action';
import {addTodoToFirebase} from '../config/firebase';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  FormContainer: {
    width:'100%',
    marginBottom: '20px',

  },
  TextField: {
    margin: '10px 10px 20px 100px',
    width: '470px'
  },
  AddButton: {
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
      const todoID = addTodoToFirebase(todoContent);
      dispatch(addTodo(todoContent,todoID));
      setTodoContent("");
    }
  }
  return (
      <div className={classes.FormContainer}>
        <TextField id="filled-basic" className={classes.TextField} placeholder="Write a new note..." value={todoContent} onChange={handleUserInput} />
        <Fab size="medium" color="secondary" aria-label="add" className={classes.margin} className={classes.AddButton} onClick={writeTodo}>
          <AddIcon />
        </Fab>
      </div>
  );
}
export default connect()(AddTodoForm);
