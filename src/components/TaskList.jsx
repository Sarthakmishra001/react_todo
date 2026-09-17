import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDelete }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} index={index} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default TaskList;