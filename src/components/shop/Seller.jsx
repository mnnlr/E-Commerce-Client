import React from 'react'
import SellerProductDetails from './SellerProductDetails'
import { products } from '../constantdata/data'
import { girls } from '../constantdata/girlsData'
import { mans } from '../constantdata/manData'
import { woman } from '../constantdata/womanData'
import { boys } from '../constantdata/boyData'

const Seller = () => {
  return (
    <>
        <SellerProductDetails  products={products} girls={girls} mans={mans} woman={woman} boys={boys}/>
    </>
  )
}

export default Seller;