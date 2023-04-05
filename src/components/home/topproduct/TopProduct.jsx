import React from 'react'
import { topProducts } from '../../assets/data/data'
import Heading  from '../../common/Heading'
import Productitem from '../product/Productitem'
import { useState } from 'react'

const TopProduct = () => {
    const [data,setdata] =useState(topProducts)
    const allCategiries = ['all', ...new Set(data.map((items)=> items.category))]
    const [category,setcategory] = useState(allCategiries)
    const handleFilter =(category) => {
        const newItem = topProducts.filter((item) => item.category === category)
        setdata(newItem)

        if(category === "all") {
            setdata(topProducts)
            return
        }
    }
  return (
    <div>
      <section className='topproduct'>
        <div className="container">
            <div className="head">
                <Heading title="Top Selling Productsa" desc="Meet Our newbies! The latets templates uploaded to the marketplace"/>
                <div className="category">
                    {category.map((category) => (
                        <button className="button" onClick={() => handleFilter(category)}>{category}</button>
                    ))}
                </div>
            </div>
            <Productitem data={data} />
        </div>
      </section>
    </div>
  )
}

export default TopProduct
