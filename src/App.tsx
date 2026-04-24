import { useState } from 'react'
import { Header } from './components/Header/Header'
import { TaskInput } from './components/TaskInput/TaskInput'
import { TaskList } from './components/TaskList/TaskList'
import { Task } from './types/Task'
import styles from './App.module.css'

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  function handleAddTask(title: string) {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      isCompleted: false,
    }
    setTasks(prevTasks => [...prevTasks, newTask])
  }

  function handleToggleTask(id: string) {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    )
  }

  function handleDeleteTask(id: string) {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
  }

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <TaskInput onAddTask={handleAddTask} />
        <TaskList
          tasks={tasks}
          onToggleTask={handleToggleTask}
          onDeleteTask={handleDeleteTask}
        />
      </main>
    </div>
  )
}

export default App
