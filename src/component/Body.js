import restList from "../utils/mockdata";
import Cards from "./Cards";
import {useEffect, useState } from "react";
import Sheemer from "./Sheemer";


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

    const data = await fetch("https://swiggy-api-4c740.web.app/swiggy-api.json");

   
    const json = await data.json();

  console.log(json)
  setRestorantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  setFilterList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

  }
  
  if(restorantList.length === 0)
  {
    return <Sheemer/>
    
  }

  return (
    
    <div className="body">
    
       <p>Your Taste, Our Priority</p>
       <div className="btn" onClick={() =>{
        const filterList = restorantList.filter((resto) => resto.info.avgRating > 4.2)
        setFilterList(filterList);
       
        }}>
            <button className="top-btn">
              Top Restaurants
            </button>
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
                <Cards key={restaurant.info.id}  restData ={restaurant}/>
                
            ))
          }                           
      </div>
      
    </div>
  );
};

export default Body ;