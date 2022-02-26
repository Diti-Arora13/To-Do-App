import { AiOutlineClose } from 'react-icons/ai';

const Task = ({ task, deleteTask }) => {
  return (
    <div className="task">
        <h2>{task.tasktext}</h2>

        <div className="task-inner">
          <p className="task-day">{task.date}</p>
          <AiOutlineClose onClick={() => deleteTask(task.id)} className='cross-icon' />
        </div>
    </div>
  )
}

export default Task