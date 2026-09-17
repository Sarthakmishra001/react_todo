const TaskItem = ({ task, index, onDelete }) => {
  return (
    <li className='flex justify-between gap-50 items-center'>
      {index + 1}. {task.text} 
      <button 
        onClick={() => onDelete(index)}
        className='bg-red-500 hover:bg-red-700 text-white font-bold px-20 py-10'
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;