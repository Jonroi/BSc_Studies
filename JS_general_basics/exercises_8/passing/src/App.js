import { TaskList } from './components/taskList';
import tasks from './data/tasks';
import './App.css';

function App() {
  return (
    <div className='App'>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
