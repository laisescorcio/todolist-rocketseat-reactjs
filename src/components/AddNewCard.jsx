import React from 'react'
import insertIcon from '../assets/insertIcon.svg'

import styles from './AddNewCard.module.css'

export default function AddNewCard({childToParent}) {
    const data = "Estes são os dados do componente filho para o componente pai."

    function handleCreateNewCard(event) {
        event.preventDefault() //previne o default de que no clique o usuário seja redirecionado
    
        console.log('clique')
    }

    return (
        <form
            onSubmit={handleCreateNewCard}
        >
            <button primary onClick={() => childToParent(data)}>Clique no filho</button>
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
