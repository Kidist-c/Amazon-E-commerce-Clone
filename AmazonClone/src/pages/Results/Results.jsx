import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../../components/product/ProductCard';
import classes from './results.module.css'
import Loader from '../../components/Loader/Loader'

function Results() {
  const { CatagoryName } = useParams();
  console.log(CatagoryName)
  const [results, setResult] = useState([]);
  const [loading, setLoaiding]=useState(true);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/category/${CatagoryName}`)

      .then((response) => {
        setResult(response.data)
        setLoaiding(false)
      })
      .catch((err) => {
        console.error(err)
        setLoaiding(false)});
  },[]);

  return (
    <Layout>
        {loading ? <Loader /> :<section>
             <h1 style={{padding:"30px"}}>Results</h1>
      <p style={{padding:"30px"}}>Catagory</p>
     <hr/>
        <div className={classes.container}>
            {
        results.map((result)=>{
            return (
                <ProductCard 
                   key={result.id}
                   data={result}
                />
            )
        })
      }
            </div>
        </section>}
     
      
      
    </Layout>
  );
}

export default Results;

