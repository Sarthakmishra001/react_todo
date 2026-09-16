import React from 'react'
import { useEffect ,useState } from 'react';

const App = () => {
 
  let form_submit = (e)=>{
    e.preventDefault();
    let t = e.target.Save.value;
  }
  const [task,setTask] = useState(()=>{
    const saved = localStorage.getItem("task");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(()=>{
    localStorage.setItem("task",JSON.stringify(task));
  })

  return (
   <>
   <h1 className="text-3xl font-bold underline text-center ">Todo List</h1>
    <div className="flex justify-center items-center gap-3 h-96  bg-gray-500">
      <form onSubmit={form_submit} action="">
        <input name='Save' className='border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" placeholder="Enter a new task..." />
      
      <button 
       className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-20 py-10 rounded ">
        Add Task
      </button>
      </form>
      
    </div>
    <div className=" w- text-center  ">
      <h3 className='text-red-500'>Task List</h3>
      <ul className='bg-blue-500'>
          {task.map((task,index)=>(
            <li >{index+1}.  {task.text}</li>
          ))}
      </ul>
    </div>

   </>
  )
}

export default App
