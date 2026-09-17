import React from 'react'
// All hooks start with the word use, like useState and useEffect, and they must be called at the top level of a component
// usestate use kra jisse state yaad rekhe react but ye ram me hota means agr tab bnd kri to to jo bhi yaad tha vo ht jayega but localstorage use krte jisse broswer me save krde .
// useEffect component ko side effect use krne deta h like localstorage , api calls , timers etc. 
import { useEffect ,useState } from 'react';

const App = () => {
//  yha hmne task aur settask bnaya jo ki usestate ka default method h lekhne ka jisme task vo hoge jo user input me lekhega aur settask vo fn hai jo task ko update krega. isme hmne localstorage bhi krdi jisse data save ho jaye
 const [task,setTask] = useState(()=>{
    const saved = localStorage.getItem("task");
    // condition ? valueIfTrue : valueIfFalse
//     saved ? — check karo: matlab null nahi hai, koi value hai
// Agar haan → JSON.parse(saved) chalao
// Agar nahi (null hai) → [] (khali array) return karo
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(()=>{
    localStorage.setItem("task",JSON.stringify(task));
  },[task])

  let form_submit = (e)=>{
    e.preventDefault();
    let new_task_text = e.target.taskInput.value;
    setTask([...task, {text:new_task_text}]);
    e.target.reset();
  }


  return (
   <>
   <h1 className="text-3xl font-bold underline text-center ">Todo List</h1>
    <div className="flex justify-center items-center gap-3 h-96  bg-gray-500">
      <form onSubmit={form_submit} action="">
        <input name='taskInput' className='border border-gray-300 rounded py-2 px-4
         focus:outline-none focus:ring-2 focus:ring-blue-500' type="text"
          placeholder="Enter a new task..." />
      
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
