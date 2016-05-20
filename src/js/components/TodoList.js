import React, { PropTypes, Component } from 'react'
import DeleteButton from './DeleteButton'
import { Link } from 'react-router'

class TodoList extends Component {

  constructor(props){
    super(props);
  }

  render(){
    const { todos, deleteHandler, mouseoveredHandler } = this.props;

    return(
      <div>
        <h1>TodoNumber of todos: {todos.length}</h1>
        <table>
          <thead>
          <tr>
            <th style={{width: "200px"}}>title</th>
            <th style={{width: "200px"}}>Actions</th>
          </tr>
          </thead>
          <tbody>
            {
              todos.map( (todo) => {
                return (
                  <tr key={todo.id} onMouseOver={mouseoveredHandler.bind(this, todo.id)}>
                    <td>{todo.title}</td>
                    <td>
                      <DeleteButton deleteHandler={deleteHandler.bind(this, todo.id)}/>
                      <Link to={`/todos/${todo.id}`}> Open </Link>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }

}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  deleteHandler: PropTypes.func.isRequired,
  mouseoveredHandler: PropTypes.func.isRequired
};

export default TodoList;