import React, { useState } from 'react'
import  Heading  from '../../common/Heading'
import Productitem from './Productitem'
import {products} from '../../assets/data/data'

const Product = () => {
    const [data,setdata] =useState(products)
  return (
    <div>
      <section className="product">
        <div className="container">
            <Heading title='Trending Products' desc='Check the hottest design of the week. These rising stars are worth your attention' />

            <Productitem data={data}/>
        </div>
      </section>
    </div>
  )
}

export default Product
