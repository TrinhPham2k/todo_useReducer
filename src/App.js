import React, { useReducer, useRef } from "react";
import { setTodo, addTodo, delTodo } from "./store/action";
import reducer, { initstate } from "./store/reducer";
import StyleModule from "./StyleModule";

import "./styles.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initstate);
  const { todos, todoInput } = state;
  const ref = useRef();
  const handleAddTodo = () => {
    dispatch(addTodo(todoInput));
    dispatch(setTodo(""));
    ref.current.focus();
  };
  const handleDel = (id) => {
    dispatch(delTodo(id));
  };
  return (
    <>
      <StyleModule />
      <h1 ref={ref}>Helllo</h1>
      <input
        value={todoInput}
        onChange={(e) => dispatch(setTodo(e.target.value))}
      />
      <button onClick={handleAddTodo}>Add</button>
      <br />
      <ul>
        {todos.map((todo, index) => (
          <li>
            {todo}
            <p onClick={() => handleDel(index)}>DELETE</p>
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;
