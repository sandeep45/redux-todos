import React, { PropTypes, Component } from 'react'
import DeleteButton from './DeleteButton'

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
            <th>id</th>
            <th>title</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
            {
              todos.map( (todo) => {
                return (
                  <tr key={todo.id} onMouseOver={mouseoveredHandler.bind(this, todo.id)}>
                    <td>{todo.title}</td>
                    <td><DeleteButton deleteHandler={deleteHandler.bind(this, todo.id)}/></td>
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