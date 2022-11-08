import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './components/Navbar.jsx'
import Miniguide from './components/Miniguide'
import Filter from './components/Filter'
import Video from './components/Video'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <div className={styles.containerMini}>
          <Miniguide />
        </div>
        <div className={styles.containerRight}>
          <div className={styles.container3}>
            <Navbar />
            <Filter />
          </div>      
          <Video />
        </div>
      </div>  
    </div>
    
    
  )
}
