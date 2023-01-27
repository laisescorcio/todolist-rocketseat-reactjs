import { useState } from 'react'
import toDoListLogo from './assets/toDoListLogo.svg'
import clipboard from './assets/clipboard.svg'
import insertIcon from './assets/insertIcon.svg'
import checkedBox from './assets/checkedBox.svg'
import { Trash } from 'phosphor-react'

import styles from './App.module.css'

function App() {
  const [isEmpty, setIsEmpty] = useState(true)

  return (
    <div className="App">
      <header className={styles.header}>
        <img src={toDoListLogo} alt="To Do List Logo"/>
      </header>
      <main className={styles.main}>
        <div className={styles.wrapperMain}>
        <div className={styles.taskInputBox}>
          <input className={styles.taskInput}/>
          <button className={styles.taskButton}>
            Criar
            <img src={insertIcon} />
          </button>
        </div>
        <div>
          <div className={styles.wraperTaskInput}>
            <span className={styles.taskInputCreated}>Tarefas criadas</span>
            <span className={styles.taskInputDone}>Concluídas</span>
          </div>
          { isEmpty ? (
            <div className={styles.wraperTaskBoard}>
              <img src={clipboard}/>
              <div className={styles.taskBoard}>
                <span className={styles.taskBoardEmpty}>Voce ainda não tem tarefas cadastradas</span>
                <span className={styles.taskBoardDoIt}>Crie tarefas e organize seus itens a fazer</span>
              </div>
            </div>
          ) : (
            <div className={styles.wraperTaskBoard}>
              <div className={styles.wraperCard}>
                <checkbox className={styles.checkbox}></checkbox>
                <span className={styles.content}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
                <Trash size={20}/>
              </div>
              <div className={styles.wraperCard}>
                <checkbox className={styles.checkbox}></checkbox>
                <span className={styles.content}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
                <Trash size={20}/>
              </div>
              <div className={styles.wraperCard}>
                <checkbox className={styles.checkbox}></checkbox>
                <span className={styles.content}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
                <Trash size={20}/>
              </div>
              <div className={styles.wraperCard}>
                <checkbox className={styles.checkbox}></checkbox>
                <span className={styles.content}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
                <Trash size={20}/>
              </div>
              <div className={styles.wraperCard} disabled>
                <checkbox className={styles.checkbox}>
                  {/* { disabled && <img src={checkedBox}/> } */}
                </checkbox>
                <span className={styles.content}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
                <Trash size={20}/>
              </div>
            </div>
          )
          }
        </div>
        </div>
      </main>
    </div>
  )
}

export default App
