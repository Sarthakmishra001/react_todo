import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDelete }) => {
  return (
    <div className="w-full display flex-col flex justify-center items-center gap-3">
      <h3 className='text-red-500'>Task List</h3>
      <ul className='bg-blue-500 w-full'>
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} index={index} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;