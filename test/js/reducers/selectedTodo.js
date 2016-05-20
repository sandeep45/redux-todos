import expect from 'expect'

import selectedTodo from '../../../src/js/reducers/selectedTodo.js'
import K from "../../../src/js/constants/"

describe("selectedTodo.js", () => {

  it("returns -1 when unknown action is given" , () => {
    const newState = selectedTodo(undefined, {});
    expect(newState).toEqual(-1);
  });

  it("returns the new id which is selected" , () => {
    const newState = selectedTodo(1, {
      type: K.SELECT_TODO,
      id:2
    });
    expect(newState).toEqual(2);

    const newState2 = selectedTodo(newState, {
      type: K.SELECT_TODO,
      id:100
    });
    expect(newState2).toEqual(100);
  });

});