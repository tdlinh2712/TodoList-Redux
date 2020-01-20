import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from '../actions/action';
import Todo from './Todo';
import AddTodoForm from './AddTodoForm';
import { makeStyles } from '@material-ui/core/styles';
import '../App.css';


class App extends Component {

  action = (event) => {
    this.props.simpleAction();
  }

  render() {
    const {notCompleted,completed,userId} = this.props;
    console.log(userId)
    return (
      <div>
        <div className="App">
          <header className="header">
            <h1 className="App-title">Todo list</h1>
          </header>
          <AddTodoForm/>
          <div className="todos-body">
            <div className="todos-container">
              {notCompleted.map((todo,index) =>
                <Todo todoID={todo.id} key={todo.id} content={todo.content} completed={false}/>
              )}
            </div>
            <div className="divider">
            </div>
            <div className="todos-container">
              {completed.map((todo,index) =>
                <Todo todoID={todo.id} key={todo.id} content={todo.content} completed={true}/>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/*
 * mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

/*
 * mapStateToProps
*/
const mapStateToProps = state => ({
  notCompleted: state.reducer.notCompleted,
  completed: state.reducer.completed,
  userId:state.userId
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
