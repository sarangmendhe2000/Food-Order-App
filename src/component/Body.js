import restList from "../utils/mockdata";
import Cards from "./Cards";
import { use, useState } from "react";


const Body = () => {

  // local state variable
  const [restorantList , setRestorantList] = useState(restList)
  const [searchText , setSearchText] = useState('')

  const searchHandler = (e) =>{

      e.preventDefault(); 

      const filtered = restList.filter((res)=>{
       return res.info.name.toLowerCase().includes(searchText.toLowerCase())
      })
      setRestorantList(filtered)
      setSearchText('');

  }

  return (
    
    <div className="body">
      
       <p>Search Delicious Food Here...</p>
       <div className="btn" onClick={() =>{
        const filterList = restList.filter((resto) => resto.info.avgRating > 4.3)
        setRestorantList(filterList);
       
        }}>
            <button className="top-btn">
              Top Restaurants
            </button>
        </div>
      <div className="searchBar">
       
        <form onSubmit={searchHandler}>
          <input type="text" className="searchBox"
          placeholder="Search restorant here"
          value={searchText}
          onChange={(e) =>{
            setSearchText(e.target.value)
          }}
          
           />

        
          <button type="submit" className="button">
            Search
          </button>
        </form>

      </div>
      
    


      <div className="restoContainer">
          {
            restorantList.map((restaurant) =>(
                <Cards key={restaurant.info.id}  restData ={restaurant}/>
                
            ))
          }                           
      </div>
    </div>
  );
};

export default Body ;