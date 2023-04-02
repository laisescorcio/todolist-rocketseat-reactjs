import React from 'react'
import clipboard from '../assets/clipboard.svg'

import styles from './EmptyComponent.module.css'


function EmptyComponent() {
    return (
        <div className={styles.wraperTaskBoard}>
            <img src={clipboard} />
            <div className={styles.taskBoard}>
                <span className={styles.taskBoardEmpty}>Voce ainda não tem tarefas cadastradas</span>
                <span className={styles.taskBoardDoIt}>Crie tarefas e organize seus itens a fazer</span>
            </div>
        </div>
    )
}

export default EmptyComponent
