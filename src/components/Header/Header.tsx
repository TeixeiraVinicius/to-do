import { Rocket } from 'lucide-react'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Rocket size={40} className={styles.icon} />
        <h1>
          <span className={styles.blue}>to</span>
          <span className={styles.purple}>do</span>
        </h1>
      </div>
    </header>
  )
}
