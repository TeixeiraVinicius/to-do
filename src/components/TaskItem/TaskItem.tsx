import { Trash2, Check } from 'lucide-react'
import { Task } from '../../types/Task'
import styles from './TaskItem.module.css'

interface TaskItemProps {
  task: Task
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <li className={`${styles.item} ${task.isCompleted ? styles.itemCompleted : ''}`}>
      <button
        className={`${styles.checkbox} ${task.isCompleted ? styles.checkboxChecked : ''}`}
        onClick={() => onToggle(task.id)}
        aria-label={task.isCompleted ? 'Marcar como pendente' : 'Marcar como concluída'}
      >
        {task.isCompleted && <Check size={12} strokeWidth={3} />}
      </button>

      <p className={`${styles.title} ${task.isCompleted ? styles.titleCompleted : ''}`}>
        {task.title}
      </p>

      <button
        className={styles.deleteButton}
        onClick={() => onDelete(task.id)}
        aria-label="Deletar tarefa"
      >
        <Trash2 size={16} />
      </button>
    </li>
  )
}
