import React, { useEffect, useState } from 'react'
import SearchItems from '../hero/SearchItems'
import {useSelector, useDispatch} from 'react-redux'
import { useParams,useNavigate } from 'react-router-dom'
import{MdStarRate } from 'react-icons/md'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import {ADD,DELETE,REMOVE_INT} from '../../../controller/action'




const Details = () => {
    const [data,setData] = useState([])
    const getdata = useSelector((state) => state.cartReducer.carts)

    const {id} = useParams()
    const compare = () => {
        let compareData = getdata.filter((e) => {
            return e.id == id
        })
        setData(compareData)
    }
    useEffect(() => {
        compare()
    }, [id])

     // increment item
  const dispatch = useDispatch()
  const increment = (e) => {
    dispatch(ADD(e))
  }
 // decrement item

 const decrement = (e) => {
   dispatch(REMOVE_INT(e))
 }
 //delete
 const history = useNavigate()
 const deletes = (id) => {
    dispatch(DELETE(id))
    history.push("/")
  }

  return (
    <div>
     <article>
        <section className='details'>
          <h2 className='details_title'>Product Details Pages</h2>
          {data.map((item) => (
            <div className='details_content'>
              <div className='details_content_img'>
                <img src={item.cover} alt='' />
              </div>
              <div className='details_content_detail'>
                <h1>{item.title}</h1>
                <div className='rating'>
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <label htmlFor=''>(1 customer review)</label>
                </div>
                <h3> ${item.price * item.qty}</h3>
                <p>{item.author}</p>
                <div className='qty'>
                  <div className='count'>
                    <button onClick={() => increment(item)}>
                      <AiOutlinePlus />
                    </button>
                    <span>{item.qty}</span>
                    <button onClick={item.qty <= 1 ? () => deletes(item.id) : () => decrement(item)}>
                      <AiOutlineMinus/>
                    </button> 
                  </div>
                    <button className="button">Add To Cart</button>
                </div>
                <div className="desc">
                    <h4>PRODUCT DESCRIPTION</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam voluptas quae ullam odio ipsa, ratione suscipit aut ea et accusamus.</p>
                    <h4>PRODUCT DETAILS</h4>
                    <ul>
                        <li><p>Material: Plastic, Wood</p></li>
                        <li><p>Dimension And Weight: 80cm, 5.3kg</p></li>
                        <li><p>Lenght:46cm</p></li>
                        <li><p>Depth: 52cm</p></li>
                        <li><p>Set Height: 44cm</p></li>




                        </ul>
                </div>
              </div>
            </div>
          ))}
        </section>
      </article>
    </div>
  )
}

export default Details
