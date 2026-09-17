const TaskItem = ({ task, index, onDelete }) => {
  return (
    <li className='flex justify-between'>
      {index + 1}. {task.text}
      <button onClick={() => onDelete(index)}>Delete</button>
    </li>
  );
};

export default TaskItem;