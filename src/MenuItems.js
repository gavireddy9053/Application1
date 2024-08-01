import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemListCards from './ItemListCards'
import useGetData from './useGetData'

function MenuItems() {

    let id = useParams()
    console.log(id)
    let url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.30070&lng=80.46390&restaurantId=${id.restId}`
  console.log(url)
  let jsonData = useGetData(url)
    console.log(jsonData)
    let itemCardsData = jsonData?.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards
console.log(itemCardsData)
 


    return (
    <div>
        {itemCardsData?.map((item,index)=>{
         return <ItemListCards item={ item?.card?.card?.itemCards} title={item?.card?.card?.title} key={index}/>
        })}
    </div>
  )
}

export default MenuItems