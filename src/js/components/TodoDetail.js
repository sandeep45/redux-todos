import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

class TodoDetail extends Component {

  constructor(props){
    super(props);
  }

  render(){
    const { todo } = this.props;

    return(
      <div>
        id: {todo.id} <br/>
        title: {todo.title}
        <ul>
          <li> <Link to={`/todos/${todo.id}/edit`}>Edit</Link> </li>
        </ul>
      </div>
    )
  }

}

TodoDetail.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoDetail;