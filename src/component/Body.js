import restList from "../utils/mockdata";
import Cards, { addedLabel } from "./Cards";
import { useEffect, useState } from "react";
import Sheemer from "./Sheemer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import { Card } from "@mui/material";

const Body = () => {
  // local state variable

  const [restorantList, setRestorantList] = useState(restList);

  const [searchText, setSearchText] = useState("");
  const [filterList, setFilterList] = useState(restList);

  const CardLabel = addedLabel(Cards);

  useEffect(() => {
    fetchData();
    // console.log("UseEffect Working")
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=22.7527421&lng=75.88371599999999&carousel=true&third_party_vendor=1"
    );

    const json = await data.json();

    console.log(json);
    setRestorantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (restorantList.length === 0) {
    return <Sheemer />;
  }

  const onlinestatus = useOnlineStatus();
  if (onlinestatus === false) {
    return (
      <div className="min-h-screen overflow-auto flex justify-center items-center bg-gradient-to-br from-gray-100 to-gray-300 p-4">
  <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-lg w-full border border-gray-200 text-center">
    <h1 className="text-3xl font-extrabold text-red-600 mb-4 animate-pulse">
      Oops! You're Offline
    </h1>
    <p className="text-lg text-gray-700 mb-2">
      It looks like your internet connection is down.
    </p>
    <p className="text-md text-gray-600 mb-6">
      Please check your network and try refreshing the page.
    </p>
    <h2 className="text-2xl font-semibold text-green-700 animate-bounce">
      🍽️ Delicious food is waiting for you...
    </h2>
  </div>
</div>


    );
  }

  return (
    <div className="h-[150vh] bg-linear-to-r from-[#f5f5f5] to-[#fafafa] ">
      <div className="flex justify-start text-2xl text-[#a8642a] font-['Segoe UI', sans-serif] text-center bg-linear-to-r from-[#fdf1e0] to-[#fafafa] p-5 rounded-2xl shadow-xl">
        <button
          className="w-[208px] cursor-pointer relative left-[105px] p-[8px] bg-[#e67e22] text-white font-['Franklin_Gothic_Medium','Arial_Narrow',Arial,sans-serif] rounded-full border-2 border-[#d35400] italic transition-all duration-700 ease-in hover:bg-gradient-to-r hover:from-[rgb(253,120,4)] hover:to-[rgb(122,72,5)] hover:p-[16px] hover:font-extrabold"
          onClick={() => {
            const topRated = restorantList.filter(
              (resto) => resto.info.avgRating > 4.3
            );
            setFilterList(topRated);
          }}
        >
          Top Restaurants
        </button>
        <span className="ml-[200px] inline-block animate-float-text">
          Discover Delicious Meals Near You
        </span>
      </div>

      <div className="flex justify-end mb--2.5 mt-[-60px] mr-[20px]">
        <input
          type="text"
          className="w-72 h-9 border-2 border-[#e67e22] rounded-3xl bg-[rgba(255,255,255,0.9)] text-[#333]  font-['Segoe UI', sans-serif] transition duration-300 ease-in-out shadow-lg focus:outline-none focus:border-[#cf711f] focus:shadow-[0_0_8px_rgba(230,126,34,0.5)] placeholder-[#a8642a] placeholder-italic placeholder-opacity-80"
          placeholder="   Search restorant here"
          value={searchText}
          onChange={(e) => {

          const input = e.target.value;

            setSearchText(input);

             const filteredResto = restorantList.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(input.toLowerCase());
            });
            setFilterList(filteredResto); 

          }}
        />

        <button
          type="submit"
          className="lg-linear-to-r from-[#f0a04b] to-[#e67e22] border-2 border-[#cf711f] rounded-3xl h-[38px] px-[18px] m-0.5 text-black text-[15px] font-['Segoe UI', sans-serif] cursor-pointer transition-bg-transform shadow-xl hover:bg-[#fdf1e083] hover:scale-105 "
          onClick={() => {
            const filteredResto = restorantList.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setFilterList(filteredResto);
            setSearchText("");
          }}
        >
          Search
        </button>
      </div>

      <div className="w-[89vw] h-[68vh] border-[3px] border-[rgb(220,220,220)] rounded-[5px] ml-15 mt-12 overflow-auto flex flex-wrap custom-scrollbar">
        {filterList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.avgRating > 4.3 ? (
              <CardLabel restData={restaurant} />
            ) : (
              <Cards restData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
