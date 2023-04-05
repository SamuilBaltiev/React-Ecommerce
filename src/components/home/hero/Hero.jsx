import React, { useState } from 'react'
import {BiSearch} from 'react-icons/bi'
import SearchItems from './SearchItems'
import {products} from '../../assets/data/data'


const Hero = () => {
  const [value, setvalue] =useState("")
  const onChanage = (e) => {
    setvalue(e.target.value)
  }
  const onSearch = (key) => {
    setvalue(key)
    console.log("search", key)
  }
  return (
    <section className='hero'>
       <div className="container">
       <h1>
            <label >Over <span>6,500</span>Curated Design</label> <br />
            <label >Resources, <span>Graphic & Website</span> Templates</label>
            </h1>
            <p>High-quality Desing Themes for personal or commercial use containts 6k+ items in 100 categories</p>
            <div className="search">
                <span>All Categories</span>
                <hr />
                <input type="text" placeholder='Search Products ...' onChange={onChanage} value={value}/>
                <button onClick={() => onSearch(value)}>
                    <BiSearch className='searchIcon heIcon' />
                </button>
               
            </div>
            <SearchItems product={products} value={value} onSearch={onSearch} />
            <p>Examples: Mockup, PSD, Theme Design, Image...</p>
       </div>
    </section>
  )
}

export default Hero
