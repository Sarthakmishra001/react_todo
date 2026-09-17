import { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const [task, setTask] = useState(() => {
    const saved = localStorage.getItem("task");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  let add_task = (text) => setTask([...task, { text }]);
  let delete_task = (index) => setTask(task.filter((_, i) => i !== index));

  return (
    <>
      <h1>Todo List</h1>
      <TaskForm onAddTask={add_task} />
      <TaskList tasks={task} onDelete={delete_task} />
    </>
  );
};

export default App;