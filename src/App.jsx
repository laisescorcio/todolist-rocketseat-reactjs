import { useState } from 'react'
import EmptyComponent from './components/EmptyComponent'
import CardComponent from './components/CardComponent'
import AddNewCardComponent from './components/AddNewCardComponent'
import toDoListLogo from './assets/toDoListLogo.svg'

import styles from './App.module.css'

function App() {
  const [isEmpty, setIsEmpty] = useState(false)

  return (
    <div className="App">
      <header className={styles.header}>
        <img src={toDoListLogo} alt="To Do List Logo"/>
      </header>
      <main className={styles.main}>
        <div className={styles.wrapperMain}>
          <AddNewCardComponent/>
          <div>
            <div className={styles.wraperTaskInput}>
              <span className={styles.taskInputCreated}>Tarefas criadas</span>
              <span className={styles.taskInputDone}>Tarefas concluídas</span>
            </div>
            { isEmpty ? (
              <EmptyComponent />
            ) : (
              <CardComponent/>
            )
            }
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
