import React from 'react'
import { Trash } from 'phosphor-react'

import styles from './CardComponent.module.css'


export default function CardComponent() {
    return (
        <div className={styles.wraperTaskBoard}>
            <div className={styles.wraperCard}>
                <checkbox className={styles.checkbox}></checkbox>
                <span className={styles.content}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
                <Trash size={20} />
            </div>
            <div className={styles.wraperCard}>
                <checkbox className={styles.checkbox}></checkbox>
                <span className={styles.content}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
                <Trash size={20} />
            </div>
            <div className={styles.wraperCard}>
                <checkbox className={styles.checkbox}></checkbox>
                <span className={styles.content}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
                <Trash size={20} />
            </div>
            <div className={styles.wraperCard}>
                <checkbox className={styles.checkbox}></checkbox>
                <span className={styles.content}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
                <Trash size={20} />
            </div>
            <div className={styles.wraperCard} disabled>
                <checkbox className={styles.checkbox}>
                    {/* { disabled && <img src={checkedBox}/> } */}
                </checkbox>
                <span className={styles.content}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
                <Trash size={20} />
            </div>
        </div>
    )
}
