import Task from "./Task"

const Tasks = ({ tasks, onDelete }) => {
  return (
    <>
    {
        tasks.map(task => (
            <Task deleteTask={onDelete} key={task.id} task={task} />
        ))
    }
    </>
  )
}

export default Tasks