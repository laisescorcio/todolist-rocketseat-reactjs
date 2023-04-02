import React from 'react'
import insertIcon from '../../assets/insertIcon.svg'

import styles from './AddNewCard.module.css'


export default function AddNewCard() {
    return (
        <div className={styles.taskInputBox}>
            <input className={styles.taskInput}/>
            <button className={styles.taskButton}>
              Criar
              <img src={insertIcon} />
            </button>
        </div>
    )
}
