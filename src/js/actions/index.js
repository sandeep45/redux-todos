import K from "../constants/"

export const addTodo = (title) => {
  return {
    type: K.TODO_CREATE,
    title: title
  }
};

export const deleteTodo = (id) => {
  return {
    type: K.TODO_DESTROY,
    id: id
  }
};

export const selectTodo = (id) => {
  return {
    type: K.SELECT_TODO,
    id: id
  }
};

