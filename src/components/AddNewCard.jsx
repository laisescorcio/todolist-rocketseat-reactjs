import React, { useEffect, useRef, useState } from 'react'
import insertIcon from '../assets/insertIcon.svg'

import styles from './AddNewCard.module.css'

export default function AddNewCard({childToParent}) {
    const inputRef = useRef(null)
    const [ toDoItem, setToDoItem ] = useState('')
    const [ newToDoItem, setNewToDoItem ] = useState('')
    const data = newToDoItem

    function handleCreateNewCard(event) {
        event.preventDefault() //previne o default de que no clique o usuário seja redirecionado

        setToDoItem(...toDoItem, newToDoItem)
        setNewToDoItem('')
    }

    function handleNewToDoItemChange() {
        setNewToDoItem(event.target.value)
        console.log('newToDoItem', newToDoItem)
    }

    useEffect(() => {
        handleNewToDoItemChange()
    }, [newToDoItem])

    return (
        <form
            onSubmit={handleCreateNewCard}
        >
            <button primary >Clique no filho</button>
        <div className={styles.taskInputBox}>
            <input className={styles.taskInput} ref={inputRef} onChange={handleNewToDoItemChange}/>
            <button className={styles.taskButton} onClick={() => childToParent(data)}>
              Criar
              <img src={insertIcon} />
            </button>
        </div>
        </form>
    )
}
