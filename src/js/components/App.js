import React from 'react';
import {Link} from 'react-router';
import VisibleTodos from '../containers/VisibleTodos.js'
import TodoAdd from '../containers/TodoAdd.js'
import SelectedTodoDetail from '../containers/SelectedTodoDetail.js'


const App = (props) => {
  return(
    <div className="container">
      <nav>
        <ul>
          <li> <Link to="/todos">All Todos</Link> </li>
        </ul>
      </nav>
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

