import React from 'react'
import styles from '../../styles/Filter.module.css'
import {AiOutlineRight} from 'react-icons/ai'

const Filter = () => {
  return (
    <div className={styles.container}>
        <button className={styles.btnAll}>
            All
        </button>
        <button className={styles.btn}>
            Gaming
        </button>
        <button className={styles.btn}>
            Live
        </button>
        <button className={styles.btn}>
            Music
        </button>
        <button className={styles.btn}>
            Mixes
        </button>
        <button className={styles.btn}>
            ILLSLICK
        </button>
        <button className={styles.btn}>
            CSS
        </button>
        <button className={styles.btn}>
            CSS
        </button>
        <button className={styles.btn}>
            CSS
        </button>
        <button className={styles.btn}>
            CSS
        </button>
        <button className={styles.btn}>
            CSS
        </button>
        <AiOutlineRight className={styles.arrow}/>
    </div>  
    )
}

export default Filter