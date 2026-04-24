import { ClipboardList } from 'lucide-react'
import { Task } from '../../types/Task'
import { TaskItem } from '../TaskItem/TaskItem'
import styles from './TaskList.module.css'

interface TaskListProps {
  tasks: Task[]
  onToggleTask: (id: string) => void
  onDeleteTask: (id: string) => void
}

export function TaskList({ tasks, onToggleTask, onDeleteTask }: TaskListProps) {
  const total = tasks.length
  const completed = tasks.filter(t => t.isCompleted).length

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <div className={styles.counter}>
          <span className={styles.labelBlue}>Tarefas criadas</span>
          <span className={styles.badge}>{total}</span>
        </div>
        <div className={styles.counter}>
          <span className={styles.labelPurple}>Concluídas</span>
          <span className={styles.badge}>
            {total === 0 ? '0' : `${completed} de ${total}`}
          </span>
        </div>
      </header>

      <div className={styles.divider} />

      {total === 0 ? (
        <div className={styles.empty}>
          <ClipboardList size={56} className={styles.emptyIcon} />
          <div>
            <p className={styles.emptyTitle}>
              Você ainda não tem tarefas cadastradas
            </p>
            <p className={styles.emptySubtitle}>
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        </div>
      ) : (
        <ul className={styles.list}>
          {tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={onToggleTask}
              onDelete={onDeleteTask}
            />
          ))}
        </ul>
      )}
    </section>
  )
}
