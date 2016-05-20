import React, { PropTypes, Component } from 'react'

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
      </div>
    )
  }

}

TodoDetail.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoDetail;