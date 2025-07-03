export const Task = ({ task }) => {
    return (
        <div>
            <h1>{task.name}</h1>
            <ul>
                {task.tools.map(tool => (
                    <li key={tool}>{tool}</li>
                ))}
            </ul>
            <ol>
                {task.steps.map(step => (
                    <li key={step}>{step} {step.length}</li>
                ))}
            </ol>
        </div>
    )
}