import { Task } from './task'

export const TaskList = ({ tasks }) => {
    return (
        <div>
            {tasks.map(task => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    )
}