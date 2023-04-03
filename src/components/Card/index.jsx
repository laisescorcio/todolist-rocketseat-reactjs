import React from 'react'
import { useState } from 'react'

import { Trash } from 'phosphor-react'

import styles from './Card.module.css'


export default function Card() {
  const [isDone, setIsDone] = useState(false)

    function handleCheckbox() {
        setIsDone(!isDone)
    }

    return (
        <div className={styles.wraperTaskBoard}>
            <button 
                className={ isDone ? `${styles.wraperCardIsDone}` : `${styles.wraperCard}`}
                onClick={handleCheckbox}
            >
                <checkbox className={styles.checkbox}>
                    {/* { disabled && <img src={checkedBox}/> } */}
                </checkbox>
                <span className={styles.content}> Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
                <Trash size={20} />
            </button>
        </div>
    )
}
