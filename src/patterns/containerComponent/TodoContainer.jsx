import { useEffect, useState } from "react";
import { TodoList } from "./TodoList";

export const TodoContainer = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);
  return <TodoList todos={todos} />;
};
export default TodoContainer;
