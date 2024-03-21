import { useEffect, useState } from "react";
import { todolist } from "@src/interface/Todolist";

const Todolist = () => {
  const [todos, setTodos] = useState<todolist[]>([]);
  useEffect(() => {
    const fetchTotolist = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        if (!response.ok) {
          throw new Error("Failed to fetching..");
        }
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTotolist();
  }, []);
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li style={{ listStyle: "none" }} key={todo.id}>
            <p>{todo.id}</p>
            <p>{todo.title}</p>
            <input type="checkbox" checked={todo.completed}></input>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
