import React from 'react'
import Rating from "@mui/material/Rating";
import Currency from '../CurrencyFormat/Currency';
import classes from './product.module.css'



function ProductCard({data}) {
    const {image, title, rating, price}= data;
  return (
    <div className={classes.container}>
        <a>
            <img src={image} alt=" "/>
            
        </a>
        <div>
            <h3>{title}</h3>
        </div>
        <div className={classes.rating}>
            <Rating value={rating.rate} precision={0.1}/>
             <small>{rating.count}</small>
        </div>
        <div>
            <Currency amount={price}/>
        </div>
        <button className={classes.button}>Add to Cart</button>
    </div>
  )
}

export default ProductCard