import React, { Component, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {deleteTodo, setComplete,editTodo} from '../actions/action';
import { connect } from 'react-redux';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
  cardContainer: {
    margin: '0 0 8px 0',
    position: 'relative',
    maxWidth: '100%',
    wordWrap: 'break-word',
  },
  EditIcon: {
    position: 'absolute',
    right: '50px',
    bottom: '5px',
    opacity: '0.5'
  },
  DeleteIcon: {
    position: 'absolute',
    right: '5px',
    bottom: '5px',
    opacity: '0.5'
  },
  CompleteIcon: {
    position: 'absolute',
    right: '95px',
    bottom: '5px',
    color: 'red'
  },
  Content: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  CompletedContent: {
    marginTop: 'auto',
    marginBottom: 'auto',
    textDecoration: 'line-through'
  },
  EditForm: {
    resize: 'none',
    maxWidth: '100%',
    overflow: 'hidden',
    outline: 'none',
    border: 'none'
  },
  EditFormContainer: {
    width: '100%',
    marginBottom: '5px'
  },
  EditFormCard: {
    minHeight: '50px',
    padding: '6px 8px 2px'
  },
  SaveButton: {
    margin: '10px 0 10px'
  }
});

const Todo = ({todoID,content,completed,dispatch}) => {
  const classes = useStyles();
  const [isEditing,setIsEditing] = useState(false);
  const [todoText,setText] = useState(content);

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(todoID,completed));
  }

  const handleSetCompleted = () => {
    dispatch(setComplete(todoID,!completed));
  }

  const handleUserInput = (e) => {
    setText(e.target.value);
  }

  const handleEditTodo = () => {
    setIsEditing(false);
    dispatch(editTodo(todoID,completed,todoText));
  }

  const RenderEdit = () => {
    return (
      <div className={classes.EditFormContainer}>
        <Card className={classes.EditFormCard} >
            <TextareaAutosize aria-label="minimum height" className={classes.EditForm}
            rowsMin={1}
            value={todoText}
            autoFocus
            onChange={handleUserInput}
            onBlur={()=>setIsEditing(false)}/>
        </Card>
        <Button variant="outlined" color="secondary" onMouseDown={handleEditTodo} className={classes.SaveButton} >
          Save
        </Button>
      </div>
    )
  }

  const RenderTodo = () => {
    return (
        <div className={classes.cardContainer}>
          <Card>
            <CardContent>
              <IconButton aria-label="delete" className={classes.EditIcon} onClick={()=>setIsEditing(true)}>
                <EditIcon />
              </IconButton>
              <IconButton aria-label="delete" onClick={handleDeleteTodo} className={classes.DeleteIcon}>
                <DeleteIcon />
              </IconButton>
              {
                completed ?
                (<IconButton aria-label="delete" onClick={handleSetCompleted} className={classes.CompleteIcon}>
                  <CheckCircleRoundedIcon />
                </IconButton>)
                :
                (<IconButton aria-label="delete" onClick={handleSetCompleted} className={classes.CompleteIcon}>
                  <CheckCircleOutlineRoundedIcon />
                </IconButton>
              )}
              <Typography  gutterBottom className={completed ? classes.CompletedContent : classes.Content}>
                {content}
              </Typography>
            </CardContent>
          </Card>
        </div>
    )
  }

  return isEditing ? RenderEdit() : RenderTodo();

}
export default connect()(Todo);
