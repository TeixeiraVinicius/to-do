import { useState, FormEvent } from 'react'
import { PlusCircle } from 'lucide-react'
import styles from './TaskInput.module.css'

interface TaskInputProps {
  onAddTask: (title: string) => void
}

export function TaskInput({ onAddTask }: TaskInputProps) {
  const [title, setTitle] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!title.trim()) return
    onAddTask(title.trim())
    setTitle('')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button className={styles.button} type="submit">
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  )
}
