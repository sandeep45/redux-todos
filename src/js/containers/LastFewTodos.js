import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { deleteTodo, editTodo } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos.slice(-3)
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteHandler: (id) => {
      dispatch(deleteTodo(id));
    }
  };
}

let LastFewTodos = (props) => {
  return (
    <div>
      <h3>Last Few Todos</h3>
      <TodoList {...props} />
    </div>
  );
};

LastFewTodos = connect(mapStateToProps,mapDispatchToProps)(LastFewTodos);

export default LastFewTodos;
