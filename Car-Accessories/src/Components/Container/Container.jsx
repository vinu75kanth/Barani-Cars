import React from 'react'
import styles from './Container.module.css'
import suzuki from '../../assets/Suzuki.png'

function Container() {
  return (
    <div className={styles.Container}>
        <img src={suzuki} className={styles.image}></img>
        <p>Suzuki</p>
    </div>
  )
}

export default Container