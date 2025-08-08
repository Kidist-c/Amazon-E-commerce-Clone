import { useEffect, useState } from 'react'
import React  from 'react'
import axios from 'axios'
import ProductCard from './ProductCard';
import classes from './product.module.css'

function Product() {
    const [Product,setProduct]=useState([]);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            setProduct(res.data);
        }).catch((err)=>{console.log(err)})
    },[])
  return (
    <section className={classes.productCon}>
        {
            Product.map((singleProduct)=>{
                return <ProductCard key={singleProduct.id} data={singleProduct}/>

            })
        }
    </section>
  )
}

export default Product