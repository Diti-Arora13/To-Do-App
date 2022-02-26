import { useState } from 'react'
// Components
import './style.css'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([])
  const [tasktext, setTasktext] = useState()
  const [date, setDate] = useState()
  const [taskError, setTaskError] = useState(false)
  const [dateError, setDateError] = useState(false)

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }
  
  // Add task
  const addTask = () =>{
    
    if(!tasktext){
      setTaskError(true)
    } 
    
    else if(!date){
      setDateError(true)
    } 

    else{
       const id = Math.floor(Math.random() * 1000) + 1
       const newTask = {id, tasktext, date}
       
       setTasks([...tasks, newTask])

       setTasktext('')
       setDate('')
       setDateError(false)
       setTaskError(false)
     }

  }

  return(
    <div className="app">
      <div className="head">
        <div className="heading">
          <h1>To-do list</h1>
          <button onClick={addTask}>Add</button>
        </div>

        <div className="add-task">
          <input onChange={(e) => setTasktext(e.target.value)} value={tasktext} placeholder='Task' className={taskError && 'task-error'} type="text" />

          <input className={dateError && 'date-error'} onChange={(e) => setDate(e.target.value)} value={date} type="date" />
        </div>
      </div>

      <div className="container">
        <Tasks onDelete={deleteTask} tasks={tasks} />
      </div>
    </div>
  )
}

export default App