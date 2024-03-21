import "./App.css";
import TasksForm from "@src/components/Tasks/TasksForm";
import TasksList from "@src/components/Tasks/TasksList";
import { TaskProvider } from "./context/TasksContext";

const App = () => {
  return (
    <div>
      <TaskProvider>
        <h1>MANAGE TASKS</h1>
        <TasksForm />
        <TasksList />
      </TaskProvider>
    </div>
  );
};

export default App;
