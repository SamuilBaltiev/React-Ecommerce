import React from 'react'
import { customer } from '../../assets/data/data'
import Heading from '../../common/Heading'
import{ImQuotesRight} from 'react-icons/im'

const Testimonial = () => {
  return (
    <div>
      <section className="customer">
      <Heading title="Choose The Plan" desc="Meet Our newbies! The latets templates uploaded to the marketplace"/>

      <div className="content">
        {customer.map((items) => (
            <div className="card">
                <button>
                    <ImQuotesRight />
                </button>
                <p>"{items.desc}"</p>
                <h3>{items.name}</h3>
                <span>{items.post}</span>
            </div>
        ))}
      </div>
      </section>
    </div>
  )
}

export default Testimonial
