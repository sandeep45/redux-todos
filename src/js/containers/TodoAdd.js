import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import TodoForm from '../components/TodoForm'
import { addTodo } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createTodo: (title) => {
      dispatch(addTodo(title));
    }
  };
}

const TodoAdd = connect(
    mapStateToProps, mapDispatchToProps
  )(TodoForm)

export default TodoAdd;
