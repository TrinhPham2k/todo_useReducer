import { SET_TODO, ADD_TODO, DEL_TODO } from "./constain";
export const setTodo = (payload) => {
  return {
    type: SET_TODO,
    payload
  };
};
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload
  };
};
export const delTodo = (payload) => {
  return {
    type: DEL_TODO,
    payload
  };
};
