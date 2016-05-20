import K from "../constants/"

const selectedTodo = (state=-1, action) => {
  switch(action.type){
    case K.SELECT_TODO:
      return action.id;
    default:
      return state;
  }
}

export default selectedTodo
