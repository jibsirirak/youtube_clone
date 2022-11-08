import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Navbar.module.css'
import Logo from '../../public/yt.png'
import Profile from '../../public/main.png'
import { FaBars,FaMicrophone,FaVideo,FaBell,FaRegUserCircle,FaEllipsisV,FaSistrix } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <Image src={Logo}  
                alt="Picture of the author"
                width={90}
                height={20} 
            />
        </div>
        <div className={styles.mid}>
            <div className={styles.search_div}>
                <input className={styles.input} placeholder='Search' />
            </div>
            <button className={styles.search_btn}>
                <FaSistrix />
            </button>
            <div className={styles.divMic}>
                <FaMicrophone />
            </div>
        </div>
        <div className={styles.right}>
            <div >
                <FaEllipsisV className={styles.emo} />
            </div>
                <div className={styles.signIn}>
                    <div className={styles.divSign}>
                        <div className={styles.divUser}>
                            <FaRegUserCircle />
                        </div>
                        Sign in
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Navbar