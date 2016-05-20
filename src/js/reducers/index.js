import { combineReducers } from 'redux'

import todos from './todos.js'
import selectedTodo from './selectedTodo.js'

const myReducer = combineReducers({
  todos: todos,
  selectedTodo: selectedTodo
});

export default myReducer;