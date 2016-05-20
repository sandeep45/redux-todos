import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import TodoDetail from '../components/TodoDetail'

const mapStateToProps = (state, ownProps) => {
  return {
    todo: state.todos.find( todo => todo.id == state.selectedTodo) || {}
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

const SelectedTodoDetail = connect(mapStateToProps,mapDispatchToProps)(TodoDetail);

export default SelectedTodoDetail;
