import React from 'react'
import { Fragment } from 'react'
import '../body.css'
import { useContext } from 'react'
import { context } from '../App'

function Card(props) {
  let name = useContext(context)
    let imgUrl = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'

  return (
    <div className='p-2 card-item ' >
    <img src={`${imgUrl}${props.ele.info.cloudinaryImageId}`} height='90px' width='200px' className='rounded'/>
<h6 style={{maxWidth:'200px'}}>{props.ele.info.name}</h6>
<p>{props.ele.info.avgRating}</p>
<p style={{maxWidth:'200px'}}>{props.ele.info.areaName}</p>
<p>{props.ele.info.sla.slaString}</p>
<p>{name}</p>

    </div>
  )
}

export default Card

export function HOC(Card){
  return function(props){
    return <div className='item'>
      <Card {...props}  />
      <h1 className='text-white bg-success label rounded'>Veg</h1>
    </div>

  }
}

