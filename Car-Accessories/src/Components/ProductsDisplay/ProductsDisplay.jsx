import React from 'react'
import styles from './ProductsDisplay.module.css'
import home from '../../assets/home.png'
import homeRed from '../../assets/home_red.png'
import products from '../../assets/best-product.png'

function ProductsDisplay(props) {

  return (
    <div className={styles.productsDisplay}>
      <img src={products} className={`${styles.productImg} ${styles.display}`} />
    </div>
  )
}

export default ProductsDisplay