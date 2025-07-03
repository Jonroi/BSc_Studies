# Renovation Project Task Components

This exercise demonstrates how to build modular React components for managing renovation project tasks, following the Eloquent JavaScript methodology.

## Components

### Task

Displays a single renovation task, including its name, required tools, and step-by-step instructions.

**Props:**

- `task` (object): The task to display. Should include at least the following fields:
  - `name` (string): Task name
  - `tools` (array of strings): Tools required
  - `steps` (array of strings): Step-by-step instructions

**Example usage:**

```js
import { Task } from './components/task'

const exampleTask = {
  name: 'Paint walls',
  tools: ['roller', 'paint', 'tape'],
  steps: ['Clean the wall', 'Tape edges', 'Apply paint']
}

<Task task={exampleTask} />
```

### TaskList

Renders a list of all tasks in the renovation project using the Task component.

**Props:**

- `tasks` (array of objects): List of task objects as described above.

**Example usage:**

```js
import { TaskList } from './components/taskList';
import { tasks } from './data/tasks';

<TaskList tasks={tasks} />;
```

## Example Data Structure

```js
export const tasks = [
  {
    id: 1,
    name: 'Paint walls',
    tools: ['roller', 'paint', 'tape'],
    steps: ['Clean the wall', 'Tape edges', 'Apply paint'],
  },
  {
    id: 2,
    name: 'Install floor',
    tools: ['saw', 'hammer', 'measuring tape'],
    steps: ['Remove old floor', 'Measure and cut', 'Install new floor'],
  },
];
```

## How to Use

1. Place your task data in a file (e.g. `src/data/tasks.jsx`).
2. Import and use the `TaskList` component in your main app, passing the data as a prop.
3. Each task will be displayed with its name, tools, and steps.

---

Tämä README noudattaa Eloquent JavaScript -opetusmetodia ja auttaa ymmärtämään komponenttipohjaista ajattelua Reactissa.
