import React from 'react'
import Layout from '../../components/Layout/Layout'
import { DataContext } from '../../utility/DataProvider/DataProvider'
import { useContext } from 'react'
import ProductCard from '../../components/product/ProductCard';
import Currency from '../../components/CurrencyFormat/Currency';
import { Link } from 'react-router-dom';
import classes from '../Cart/cart.module.css'
import { Type } from '../../utility/action.type';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
function Cart() {
  const [{cart},dispatch]=useContext(DataContext);
  const total=cart.reduce((amount,item)=>{
    return (item.price *item.amount+ amount)
  },0)
  const increment=(item)=>{
    dispatch({
      type:Type.ADD_TO_CART,
      item
    })}
    const decrement=(id)=>{
      dispatch({
        type:Type.REMOVE_FROM_CART,
        id
      })
    }
     return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.cart}>
          <h2>Hello</h2>
          <h3>Your shopping cart</h3>
          <hr/>
          {
          cart.length===0?<p>oops!No items in your cart.</p>: cart.map(item=>{
            return(<section className={classes.cart_product}>
              <ProductCard 
                    data={item}
                    flex={true}
                    productDect={true}
                    renderAdd={false}/>
                <div className={classes.cart_btn}>
                  <button  className={classes.btn} onClick={()=>increment(item)}><IoIosArrowUp /></button>
                  <span>{item.amount}</span>
                  <button className={classes.btn} onClick={()=>decrement(item.id)}><IoIosArrowDown /></button>
                </div>
            </section>
            )
                    
           })
          }

        </div>
        
        {
          cart.length !==0 && <div className={classes.subTotal}>
            <div>
              <p>SubTotal</p>
              <Currency amount={total}/>
            </div>
            <span>
              <input type="checkbox"/>
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments">Continue to Checkout</Link>
          
        </div>
        }
        
      </section>
      
    </Layout>
  )

  }
 

export default Cart