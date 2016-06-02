import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import TodoForm from '../components/TodoForm'
import { addTodo } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (title) => {
      dispatch(addTodo(title));
    }
  };
}

let TodoAdd = (props) => {
  return (
    <div>
      <TodoForm {...props} />
    </div>
  );
}

TodoAdd = connect(
    mapStateToProps, mapDispatchToProps
  )(TodoAdd)

export default TodoAdd;
