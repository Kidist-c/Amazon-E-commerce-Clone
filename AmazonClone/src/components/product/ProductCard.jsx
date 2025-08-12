import React from 'react'
import Rating from "@mui/material/Rating";
import Currency from '../CurrencyFormat/Currency';
import classes from './product.module.css'
import { Link } from 'react-router-dom';



function ProductCard({data,flex,productDect}) {
    const {image, title,id,rating, price,description}= data;
    console.log(data)
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
        <button className={classes.button}>Add to Cart</button>
        </div>
    </div>
    
  )
}

export default ProductCard