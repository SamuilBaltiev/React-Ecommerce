import React, { useEffect } from 'react'
import logo from '../assets/images/logo.svg'
import cartimg from '../assets/images/cart.png'
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import {navlist} from '../assets/data/data'
import{RiUser3Line} from 'react-icons/ri'
import {BsBagCheck} from 'react-icons/bs'
import{AiOutlineHeart, AiOutlineMenu,AiOutlineClose,AiOutlineDelete} from 'react-icons/ai'
import { useState } from 'react';
import {connect, useDispatch, useSelector} from 'react-redux'
import { DELETE } from '../../controller/action';


const Header = () => {
  window.addEventListener('scroll', function() {
    const header = this.document.querySelector('.header')
    header.classList.toggle('active', this.window.scrollY > 100)
  })

  const[mobile, setMobile] = useState(false)

  //cart add to shop
  const getdata = useSelector((state) => state.cartReducer.carts)
  console.log(getdata);


  const [cartList,setCartList] = useState(false)
  const handleClose = () => {
    setCartList(null)
  }
  const dispatch = useDispatch()
  const delet = (id) => {
    dispatch(DELETE(id))
  }
  // total price 
  const [price,setPrice] = useState()
  const totals = () => {
    let price = 0;
    getdata.map((e,i) =>{
      price = parseFloat(e.price) * e.qty + price
    })
    setPrice(price)
  }
  useEffect(() => {
    totals()
  }, [totals])
  return (
    <div>
      <header className='header'>
        <div className="container">
          <nav>
            <div className="toggle">
              <button onClick={() => setMobile(!mobile)}>
                {mobile? <AiOutlineClose className='close heIcon' /> : <AiOutlineMenu className='open heIcon' />}
              </button>
            </div>
            <div className="left">
              <img src={logo} alt="" />
            </div>
            <div className="center">
              <ul className={mobile ? "mobile-nav" : "menu"}>
                {navlist.map((nav) =>(
                  <li key ={nav.id}>
                    <Link to ={nav.path}>{nav.text}</Link>
                  </li>
                ) )}
              </ul>
            </div>
          </nav>
          <div className="right">
            <div className="right_search">
              <input type="text" placeholder='Search Product ...' />
              <BiSearch className='searchIcon heIcon'/>
            </div>
            <div className="right_user">
              <RiUser3Line className='userhIcon heIcon' />
              <AiOutlineHeart className='userhIcon heIcon' />
            </div>
            <div className="right_card">
              <button className='button' onClick={() => setCartList(!cartList)}>
                <BsBagCheck className='shop heIcon' />
                My Cart ({getdata.length})
              </button>
              <div className={cartList ? 'showCart' : 'hideCart'}>
                {getdata.length ? (
                  <section className="details">
                    <div className="details_title">
                      <h3>Photo</h3>
                      <p>Product name</p>
                    </div>
                    {getdata.map((e) => (
                      <div className="details_content">
                        <div className="details_content_img">
                          <Link to={`/cart/${e.id}`} onClick={handleClose}><img src={e.cover}/></Link>
                        </div>
                        <div className="details_content_details">
                          <div className="details_content_details_price">
                            <p>{e.title.slice(0, 20)} ...</p>
                            <p>Price : $ {e.price}</p>
                            <p>Quantity : {e.qty}</p>
                          </div>
                        </div>
                        <div className="details_content_details_icon">
                          <i onClick={() => delet(e.id)}>
                            <AiOutlineDelete />
                          </i>
                        </div>
                      </div>
                    ))}
                    <div className="details_total">
                      <h4>Total : ${price}</h4>
                    </div>
                  </section>
                ):(
                 <div className="empty">
                  <p>Your cart is empty</p>
                  <img src={cartimg} alt="" />
                 </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
  amount : state.amount,
  }
}
connect(mapStateToProps)(Header)

export default Header
