import K from "../constants/"

let id = 0;

const todos = (state=[], action) => {
  switch(action.type){
    case K.TODO_CREATE:
      return state.concat({
        id: ++id,
        title: action.title
      });
      break;
    case K.TODO_DESTROY:
      return state.filter( item => item.id != action.id )
      break;
    case K.TODO_EDIT:
      const itemIndex = state.findIndex( item => item.id == action.id )
      return [
        ...state.slice(0,itemIndex),
        {id: action.id, title: action.title },
        ...state.slice(action.id),
        ]
      break;
    default:
      return state
  }
}

export default todos
