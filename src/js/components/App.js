import React from 'react';
import VisibleTodos from '../containers/VisibleTodos.js'
import TodoAdd from '../containers/TodoAdd.js'
import SelectedTodoDetail from '../containers/SelectedTodoDetail.js'


const App = (props) => {
  return(
    <div className="container">
      <hr />
      <TodoAdd />
      <hr />
      <VisibleTodos />
      <hr />
      <SelectedTodoDetail />
      <hr />
    </div>
  )
}

export default App

