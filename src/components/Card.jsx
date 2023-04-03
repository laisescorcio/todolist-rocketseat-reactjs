import React from 'react'
import { useState } from 'react'

import { Trash } from 'phosphor-react'

import styles from './Card.module.css'


export default function Card() {
  const [isDone, setIsDone] = useState(false)
  const [ itemToDo, setItemToDo] = useState('Fazer isso!')

  console.log('itemToDo', itemToDo)

    function handleCheckbox() {
        setIsDone(!isDone)
    }

    

    return (
        <div className={styles.wraperTaskBoard}>
            <button 
                className={ isDone ? `${styles.wraperCardIsDone}` : `${styles.wraperCard}`}
                onClick={handleCheckbox}
            >
                <div className={styles.wraperCardFirstBox}>
                <checkbox className={styles.checkbox}>
                    {/* { disabled && <img src={checkedBox}/> } */}
                </checkbox>
                <span className={styles.content}>{itemToDo}</span>
                </div>
                <Trash size={20} />
            </button>
        </div>
    )
}
