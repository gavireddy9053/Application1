import React from 'react'
import './body/body.css'

function ItemListCards(props) {
       let imgUrl = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'
  return (
  
    props.item  &&
    
    <div className='items-container'>
        <span style={{fontSize:'20px' ,fontWeight:'bold', color:'coral',paddingLeft:'10px'}}>{props.title}</span>
        <span>({props?.item?.length})</span>
       <div >
       {props?.item?.map((ele)=>{
         let {name,defaultPrice,description,imageId,price} = ele.card.info
        console.log(ele)
        return <div className='d-flex justify-content-between m-3 items-card'>
            <div >
            <h5>{name}</h5>
            {defaultPrice ? <p>{defaultPrice/100}</p>:<p>{price/100}</p>}
            <p className='text-secondary w-75'>{description}</p>
            </div>
        {imageId && <img src={`${imgUrl}${imageId}`} height='100px' width='100px' className='rounded'/>}
            </div>
       })}
       </div>
    </div>
    
  )
}

export default ItemListCards

