import React, { PropTypes, Component } from 'react'

const DeleteButton = (props) => {
  const {deleteHandler} = props;

  return(
    <div >
      <input type="button" value="X"
        onClick={deleteHandler} />
    </div>
  )
}

DeleteButton.propTypes = {
  deleteHandler: PropTypes.func.isRequired
};

export default DeleteButton

