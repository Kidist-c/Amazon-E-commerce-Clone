import React from 'react'
import { catagoryInfos } from './catagoryFullinfos'
import CatagoryCard from './CatagoryCard'
import classes from './catagory.module.css'

function Catagory() {
  return (
    <section className={classes.catagory_container}>
         {
        catagoryInfos.map((catagory, index) => (
          <CatagoryCard key={index} data={catagory} />
        ))
      }
       
            
       
    </section>
  )
}

export default Catagory