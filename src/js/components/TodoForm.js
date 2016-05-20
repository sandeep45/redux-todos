import React, { PropTypes, Component } from 'react'

class TodoForm extends Component {

  constructor(props){
    super(props);
  }

  render(){
    const { createTodo, title } = this.props;

    return(
      <form onSubmit={this._handleSubmission}>
        <input type="text"
          ref={(c) => this._todoText = c}
          placeholder={title}
        />
        <input type="submit" />
      </form>
    )
  }

  _handleSubmission = (evt) => {
    evt.preventDefault();
    console.log("in handle submission. ", "_todoText is: ", this._todoText.value);
    this.props.createTodo(this._todoText.value);
    this._todoText.value="";
  }
}

TodoForm.propTypes = {
  title: PropTypes.string,
  createTodo: PropTypes.func.isRequired
};

export default TodoForm;