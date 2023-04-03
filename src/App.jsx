import { useState } from 'react'
import Empty from './components/Empty'
import Card from './components/Card'
import AddNewCard from './components/AddNewCard'
import toDoListLogo from './assets/toDoListLogo.svg'

import styles from './App.module.css'

function App() {
  const [isEmpty, setIsEmpty] = useState(false)

  const [data, setData] = useState('Fazer isso!');

const childToParent = (childdata) => {
  setData(childdata);
}

  return (
    <div className="App">
      <header className={styles.header}>
        <img src={toDoListLogo} alt="To Do List Logo"/>
      </header>
      <main className={styles.main}>
        <div className={styles.wrapperMain}>
          {data}
          <AddNewCard childToParent={childToParent}/>
          <div>
            <div className={styles.wraperTaskInput}>
              <span className={styles.taskInputCreated}>Tarefas criadas</span>
              <span className={styles.taskInputDone}>Tarefas concluídas</span>
            </div>
            { isEmpty ? (
              <Empty />
            ) : (
              <Card data={data}/>
            )
            }
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
