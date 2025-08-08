import React from "react";
import './App.css';
import CarouselEffect from "./components/carousel/CarouselEffect";
import Header from "./components/Header/Header";
import Catagory from "./components/catagory/Catagory";
import Product from "./components/product/Product";



function App() {
  return (
    <>
       <Header/>
       <CarouselEffect/>
       <Catagory/>
       <Product/>
       
    </>
  )
}

export default App