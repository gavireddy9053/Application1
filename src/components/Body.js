import React from 'react'
import '../body.css'
import { useState,useEffect } from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
import { HOC } from './Card'
import Shimmer from './shimmer'
import CourosalList from './CourosalList'

let jsonData;
function Body(props) {
  let [restaurantsData,setRestaurantsData] = useState([])
let [searchItem,setSearchItem] = useState('')
let [filteredData,setFilteredData] = useState([])
let [shimmer,setShimmer] = useState(true)
let [noResults,setNoResults] = useState(false)
let HOCCard = HOC(Card)
  
  async function fetchData(){
    setShimmer(true)
    let data = await  fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.30070&lng=80.46390&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
     jsonData = await data.json()
    let restaurantsArray = jsonData.data.cards[4].card.card.
    gridElements.infoWithStyle.restaurants
setRestaurantsData(restaurantsArray)
setFilteredData(restaurantsArray)
    setShimmer(false)
    console.log(restaurantsArray)
    console.log(jsonData)
  }
useEffect(()=>{
  fetchData()
},[])
useEffect(()=>{
  let filteredItems = restaurantsData.filter((item)=>{
    return item.info.name.toUpperCase().includes(searchItem.toUpperCase())
})
setFilteredData(filteredItems)
setNoResults(filteredItems.length == 0)
},[searchItem,restaurantsData])
  return (
    <div className='conatiner-one'>
    <input onChange={(e)=>{
         setSearchItem(e.target.value)
         console.log(e.target.value)
      }} style={{marginLeft:'20px' ,width:'40%',borderWidth:'1px'}} className='rounded'/>
<CourosalList item={jsonData?.data.cards[0]}/>

{shimmer ? <Shimmer />:(
  noResults ? <div className='text-center'>no results found</div> :
    <div className='card-conatiner'>
    
    {filteredData?.map((item,index)=>{
      return <div>

        <Link key={index} to={`/restaurants/${item.info.id}`}>{item.info.veg ?<HOCCard ele={item}/> :<Card ele={item} />}</Link>
        </div>
    })}
    </div>)}
    </div>
  )
}

export default Body