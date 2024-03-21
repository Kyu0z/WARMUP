import { createContext, useContext, useState } from "react";

interface Task {
  id: number;
  text: string;
}

interface TaskAction {
  tasks: Task[];
  addTask: (text: string) => void;
  removeTask: (id: number) => void;
}

const TaskContext = createContext<TaskAction | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
};

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (text: string) => {
    setTasks((prevTasks) => [...prevTasks, { id: Date.now(), text }]);
  };

  const removeTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};
