import { useTask } from "@src/context/TasksContext";
import { useState } from "react";

const TasksForm = () => {
  const [text, setText] = useState("");
  const { addTask } = useTask();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(text.trim());
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        placeholder="Add tasks"
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button type="submit">Save</button>
    </form>
  );
};

export default TasksForm;
