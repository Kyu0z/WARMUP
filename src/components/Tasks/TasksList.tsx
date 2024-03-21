import { useTask } from "@src/context/TasksContext";

const TasksList = () => {
  const { tasks, removeTask } = useTask();

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => removeTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
