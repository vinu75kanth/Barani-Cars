import React from 'react'
import styles from './NavBar.module.css'

function NavBar() {
  return (
    <div className={styles.navBar}>
        <div className={styles.titleContainer}>
            <p className={styles.text}>Barani Cars</p>
        </div>
    </div>
  )
}

export default NavBar