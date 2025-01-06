import React, { useEffect } from 'react'
import styles from './Product.module.css'

function Product(props) {

    const { 
        productId,
        productName,
        productBrand,
        carBrand,
        carModel,
        carSubModel 
    } = props.data;

  return (
    <div>Product</div>
  )
}

export default Product