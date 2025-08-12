import React from 'react'
import Rating from "@mui/material/Rating";
import Currency from '../CurrencyFormat/Currency';
import classes from './product.module.css'
import { Link } from 'react-router-dom';



function ProductCard({data}) {
    const {image, title,id,rating, price}= data;
    console.log(data)
  return (
    <>
    <div className={classes.container}>
      <Link to={`/products/${id}`}>
            <img src={image} alt=" "/>
            
        </Link>
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
    </div></>
    
  )
}

export default ProductCard