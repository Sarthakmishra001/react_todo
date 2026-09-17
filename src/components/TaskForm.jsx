const TaskForm = ({ onAddTask }) => {
  let form_submit = (e) => {
    e.preventDefault();
    let new_task_text = e.target.taskInput.value;
    onAddTask(new_task_text);
    e.target.reset();
  };

  return (
    <div className="flex justify-center items-center gap-3 h-96 bg-gray-500">
      <form onSubmit={form_submit}>
        <input 
          name='taskInput' 
          className='border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500' 
          type="text"
          placeholder="Enter a new task..." 
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-20 py-10 rounded">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;