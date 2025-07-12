import { useEffect, useState } from "react";
import Sheemer from "./Sheemer";
import { useParams } from "react-router-dom";
import { RESTMENU_URL } from "../utils/constants";
import { CARD_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  // const param = useParams();
  // console.log(param)

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RESTMENU_URL + resId);

    const json = await data.json();
    setResInfo(json.data);

    console.log(json);
  };
  if (resInfo === null) {
    return <Sheemer />;
  }

  const {
    name,
    avgRatingString,
    costForTwoMessage,
    cuisines,
    

    
  } =
    resInfo?.cards[2]?.card?.card?.info || {};
  
  const {
    minDeliveryTime,
    maxDeliveryTime,
    deliveryTime
  }  = resInfo?.cards[2]?.card?.card?.info?.sla 
        

  const regularCards =
    resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const menuCard = regularCards.find((c) => c?.card?.card?.itemCards);

  const itemCards = menuCard?.card?.card?.itemCards;

  console.log(itemCards);

  return (
    <div className="resBody">
      <div className="resPage">
      <div className="resInfo">
          <div className="name"><h1>{name}</h1></div>
            <button className="orderBtn">Order Now</button>
          
          <div className="box">
          <div className="rating">Rating - {avgRatingString} stars</div>
          <div className="cuisines"><h3>{cuisines.join(", ")}</h3></div>  
          <div className="deliveryTime"><span>{minDeliveryTime}</span> - <span>{maxDeliveryTime} minutes</span>  - Delivery Time </div>
          <div className="costForTwo">{costForTwoMessage}</div>
          </div>
           </div> 
      </div>


    
   <div className="newOffer">
   <div className="menu">Recommended for You...</div>
<div className="menuItems">
  <ul>
    {itemCards.map((item) => (
      <li key={item.card.info.id}>
        <div className="foodItems">
          <div className="left">
            <div className="priceInfo">
            {item.card.info.name} - Rs.{" "}
            {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
            </div>
            <div className="description">
              {item.card.info.description}
            </div>
          </div>
          <div className="right">
            <img className="MenuImg"
            src={CARD_URL + item.card.info.imageId}>

             </img>
          </div>
        </div>
      </li>
    ))}
  </ul>
</div>
</div>
    </div>

  );
};

export default RestaurantMenu;
