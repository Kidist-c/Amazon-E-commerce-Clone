import React, { useContext } from 'react'
import Rating from "@mui/material/Rating";
import Currency from '../CurrencyFormat/Currency';
import classes from './product.module.css'
import { Link } from 'react-router-dom';
import { DataContext } from '../../utility/DataProvider/DataProvider';
import { Type } from '../../utility/action.type';



function ProductCard({data,flex,productDect,renderAdd}) {
    const {image, title,id,rating, price,description}= data;
     const[state,dispatch]=useContext(DataContext);
     console.log(state)
     const addToCart=()=>{
      dispatch({
        type:Type.ADD_TO_CART,
        item:{
          image, title,id,rating, price,description
        }
      })
     }

  return (
   
    <div className={`${classes.container} ${flex?classes.flexy:''}`} >
      <Link to={`/products/${id}`}>
            <img src={image} alt=" "/>
            
        </Link>
        <div>
            <h3>{title}</h3>
            {productDect && <div style={{maxWidth:"500px"}}>{description}</div>}
        
        <div className={classes.rating}>
            <Rating value={rating.rate} precision={0.1}/>
             <small>{rating.count}</small>
        </div>
        <div>
            <Currency amount={price}/>
        </div>
        {
          renderAdd && <button className={classes.button} onClick={addToCart}>Add to Cart</button>
        }
        
        </div>
    </div>
    
  )
}

export default ProductCard