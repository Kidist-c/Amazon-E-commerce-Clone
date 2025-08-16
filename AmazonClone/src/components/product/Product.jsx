import { useEffect, useState } from 'react'
import React  from 'react'
import axios from 'axios'
import ProductCard from './ProductCard';
import classes from './product.module.css'
import Loader from '../Loader/Loader';

function Product() {
    const [Product,setProduct]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            setProduct(res.data)
            setLoading(false);
        }).catch((err)=>{console.log(err)
            setLoading(false)
        })
    },[])
  return (
    <section className={classes.productCon}>
        { loading ? <Loader />:Product.map((singleProduct)=>{
                return <ProductCard key={singleProduct.id} 
                data={singleProduct}
                renderAdd={true}/>

            })
            
        }
    </section>
  )
}

export default Product