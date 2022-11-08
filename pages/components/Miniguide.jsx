import React from 'react'
import styles from '../../styles/Miniguide.module.css'
import {AiOutlineMenu,AiFillHome,AiOutlineCompass,AiOutlinePlayCircle,AiOutlineYoutube,AiOutlinePlaySquare,AiOutlineHistory} from 'react-icons/ai'

const Miniguide = () => {
  return (
    <div className={styles.container}>

        <a href='#' className={styles.symbol} >
            <AiOutlineMenu className={styles.ham} size="6x"  />
        </a>
        <a href='#' className={styles.symbol} >
            <AiFillHome className={styles.emo}/>
            <p>Home</p>
        </a>
        <a href='#' className={styles.symbol}>
            <AiOutlinePlayCircle className={styles.emo}/>
            <p>Shorts</p>
        </a>
        <a href='#' className={styles.symbol}>
            <AiOutlineYoutube className={styles.emo}/>
            <p>Subscriptions</p>
        </a>
        <a href='#' className={styles.symbol}>
            <AiOutlinePlaySquare className={styles.emo}/>
            <p>Library</p>
        </a>
        <a href='#' className={styles.symbol}>
            <AiOutlineHistory className={styles.emo}/>
            <p>History</p>
        </a>
    </div>
  )
}

export default Miniguide