import React from 'react'
import classes from './catagory.module.css'




function CatagoryCard({data}) {
  return (
    <div className={classes.catagory}>
        <a href="">
            <span><h2>{data.title}</h2></span>
        </a>
        <img src={data.imgLink}/>
        <p>shop now</p>
    </div>
  )
}

export default CatagoryCard