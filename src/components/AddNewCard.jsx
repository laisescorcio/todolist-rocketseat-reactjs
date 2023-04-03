import React from 'react'
import insertIcon from '../assets/insertIcon.svg'

import styles from './AddNewCard.module.css'

export default function AddNewCard() {

    function handleCreateNewCard(event) {
        event.preventDefault() //previne o default de que no clique o usuário seja redirecionado
    
        console.log('clique')
    }

    return (
        <form
            onSubmit={handleCreateNewCard}
        >
        <div className={styles.taskInputBox}>
            <input className={styles.taskInput}/>
            <button className={styles.taskButton}>
              Criar
              <img src={insertIcon} />
            </button>
        </div>
        </form>
    )
}
