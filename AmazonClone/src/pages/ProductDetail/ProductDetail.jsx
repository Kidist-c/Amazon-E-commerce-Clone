import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../../components/product/ProductCard';
import Loader from '../../components/Loader/Loader';


function ProductDetail() {
  const { ProductId } = useParams();
  const [loading, setLoaiding] = useState(true);
  console.log("ProductId from URL:", ProductId);

  const [product, setProduct] = useState({});

  useEffect(() => {

    axios.get(`https://fakestoreapi.com/products/${ProductId}`)

      .then((res) => {
        setProduct(res.data);
        setLoaiding(false)
      }

      )


      .catch((err) => {
        console.error(err);
        setLoaiding(false)
      }
      )

  }, []);

  return (
    <Layout>
      {loading ? <Loader /> : <ProductCard
        data={product}
        flex={true}
        productDect={true}
      />}
    </Layout>
  );
}

export default ProductDetail;
