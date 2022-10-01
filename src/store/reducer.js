import { ADD_TODO, SET_TODO, DEL_TODO } from "./constain";

const initstate = {
  todos: [],
  todoInput: " "
};
const reducer = (state, action) => {
  switch (action.type) {
    case SET_TODO:
      return {
        ...state,
        todoInput: action.payload
      };

    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case DEL_TODO:
      let newTodo = [...state.todos];
      newTodo.splice(action.payload, 1);
      return {
        ...state,
        todos: newTodo
      };
    default:
      throw new Error("loi");
  }
};
export { initstate };
export default reducer;
