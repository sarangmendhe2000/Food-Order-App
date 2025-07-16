import restList from "../utils/mockdata";
import Cards from "./Cards";
import {useEffect, useState } from "react";
import Sheemer from "./Sheemer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus"; 


const Body = () => {

  // local state variable
  const [restorantList , setRestorantList] = useState(restList);
  const [searchText , setSearchText] = useState('');
  const [filterList , setFilterList] = useState(restList);

  useEffect(()=>{
      fetchData();
      // console.log("UseEffect Working")
  },[])


  const fetchData = async () =>{

    const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=22.7527421&lng=75.88371599999999&carousel=true&third_party_vendor=1");

   
    const json = await data.json();

  console.log(json)
  setRestorantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  setFilterList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

  }
  
  if(restorantList.length === 0)
  {
    return <Sheemer/>
    
  }
   const onlinestatus = useOnlineStatus();
  if(onlinestatus === false)
    {
      return(
        <div>
       <h1>Ahh! Look Like You Are Offline !</h1>
       <h1>Check Your Internet Connection...</h1>
       <h1 style={{ color: "green", fontSize: "36px", fontWeight: "bold" }}>  
        Delicious Food waiting for you... </h1>
        </div>
        
      )
    }


  return (
    
    <div className="body">
        <div className="bodyLine">
          <button className="top-btn"
            onClick={() => {
    const topRated = restorantList.filter((resto) => resto.info.avgRating > 4.3);
    setFilterList(topRated);
  }}
           >
              Top Restaurants
            </button>
       <span className="floating-text">Discover Delicious Meals Near You</span>
       
       </div>
      
      <div className="searchBar">
       
        
          <input type="text" className="searchBox"
          placeholder="Search restorant here"
          value={searchText}
          onChange={(e) =>{
            setSearchText(e.target.value)
          }}
          
           />

        
          <button type="submit" className="button" onClick={()=>{
            const filteredResto = restorantList.filter((res)=>{
              return res.info.name.toLowerCase().includes(searchText.toLowerCase())
            })
            setFilterList(filteredResto);
            setSearchText('')
           
          }}>
            Search
          </button>
        

      </div>
      
    

      
      <div className="restoContainer">
          {
            filterList.map((restaurant) =>(
              <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}>
              <Cards restData ={restaurant}/>
              </Link>  
                
            ))
          }                           
      </div>
      
    </div>
  );
};

export default Body ;