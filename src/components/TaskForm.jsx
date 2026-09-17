const TaskForm = ({ onAddTask }) => {
  let form_submit = (e) => {
    e.preventDefault();
    let new_task_text = e.target.taskInput.value;
    onAddTask(new_task_text);
    e.target.reset();
  };

  return (
    <form onSubmit={form_submit}>
      <input name='taskInput' placeholder="Enter a new task..." />
      <button>Add Task</button>
    </form>
  );
};

export default TaskForm;
