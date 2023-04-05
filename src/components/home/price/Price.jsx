import React from 'react'
import { price } from '../../assets/data/data'
import Heading from '../../common/Heading'

const Price = () => {
  return (
    <div>
      <section className="price">
        <Heading title="Choose The Plan" desc="Meet our newbies! The latest templates uploaded to the marketplace" />
        <div className="content">
            {price.map((item) => (
                <div className="box">
                    <h3>{item.name}</h3>
                    <h1><span>$</span>{item.price}
                    <label htmlFor="">/user per month</label>
                    </h1>
                    <p>{item.desc}</p>
                    <button className="button">GET STARTED</button>
                    <ul>
                        {item.list.map((lists) => (
                            <li>
                                <i>{lists.icon}</i>
                                <span>{lists.para}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
      </section>
    </div>
  )
}

export default Price