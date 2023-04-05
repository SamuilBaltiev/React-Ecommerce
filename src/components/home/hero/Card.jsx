import React from 'react'
import {hero} from '../../assets/data/data'

const Card = () => {
  return (
    <div>
      <section className='cards'>
    {hero.map((item) => (
        <div className='card' key={item.id}>
            <div className="left">
                <img src={item.cover} alt="" />
            </div>
            <div className="right">
                <h4>{item.name}</h4>
                <p>{item.items}</p>
            </div>
        </div>
    ))}
      </section>
    </div>
  )
}

export default Card
