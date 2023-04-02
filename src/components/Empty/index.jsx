import React from 'react'
import clipboard from '../../assets/clipboard.svg'

import styles from './Empty.module.css'


export default function Empty() {
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
