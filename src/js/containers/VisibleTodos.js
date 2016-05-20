import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { deleteTodo, selectTodo } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteHandler: (id) => {
      dispatch(deleteTodo(id));
    },
    mouseoveredHandler: (id) => {
      dispatch(selectTodo(id));
    }
  };
}

const VisibleTodos = connect(mapStateToProps,mapDispatchToProps)(TodoList);

export default VisibleTodos;
