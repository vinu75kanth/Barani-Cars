import React from 'react'
import styles from './NavBar.module.css'
import BaraniCars from '../../assets/BaraniCars.png'

function NavBar() {
  return (
    <div className={styles.navBar}>
        <div className={styles.titleContainer}>
            {/* <img src={BaraniCars} alt='B' className={styles.img}></img> */}
            <p className={styles.text}>Barani Cars</p>
        </div>
    </div>
  )
}

export default NavBar