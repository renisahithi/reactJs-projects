import { useState } from 'react'
import './App.css'
import TaskItem from './Component/TaskItem';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <div className='todo-list-heading'>
        <h3>My-To-Do-List</h3>
       </div>
        <div>
         <div className='to-input'>
          <input type="text" placeholder='EnterTask'></input>
          <lebel htmlFor="floatingInput">Todo Task</lebel>
          <button>+</button>
         </div>
        </div>
         <div>
          <ul>
            <TaskItem taskName={"reading"}/>
            <TaskItem taskName={"writing"}/>
            <TaskItem taskName={"coding"}/>
          </ul>
         </div>
      </div>
    </>
  )
}

export default App
