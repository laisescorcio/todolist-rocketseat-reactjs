import React, { useEffect, useRef, useState } from 'react'
import insertIcon from '../assets/insertIcon.svg'

import styles from './AddNewCard.module.css'

export default function AddNewCard({childToParent}) {
    const inputRef = useRef(null)
    const [ useToDoItem, setUseToDoItem ] = useState('')
    const data = "Estes são os dados do componente filho para o componente pai."

    function handleCreateNewCard(event) {
        event.preventDefault() //previne o default de que no clique o usuário seja redirecionado
        const inputValueRef = inputRef.current.value
        console.log('inputValueRef', inputValueRef)
    }

    useEffect(() => {
        console.log(useToDoItem)
    }, [useToDoItem])

    return (
        <form
            onSubmit={handleCreateNewCard}
        >
            <button primary onClick={() => childToParent(data)}>Clique no filho</button>
        <div className={styles.taskInputBox}>
            <input className={styles.taskInput} ref={inputRef} onChange={() => setUseToDoItem(event.target.value)}/>
            <button className={styles.taskButton} >
              Criar
              <img src={insertIcon} />
            </button>
        </div>
        </form>
    )
}
