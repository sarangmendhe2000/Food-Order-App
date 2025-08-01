import Sheemer from "./Sheemer";
import { CARD_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {


  const  resInfo = useRestaurantMenu();

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

  // console.log(itemCards);
  // console.log(resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const catagories = resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

  // console.log(catagories);

  return (
    <div className="bg-gradient-to-r from-[#f5f5f5] to-[#fafafa]">
      {/* resPage */}
      <div className="bg-gradient-to-r from-[#f5f5f5] to-[#fafafa]">
  {/* resPage */}
  <div className="flex justify-center p-[35px]">
    <div className="w-[500px] min-h-[200px] border-2 border-[rgb(241,238,238)] flex flex-col items-start justify-center rounded-[25px] bg-gradient-to-r from-[rgba(220,217,217,0.395)] to-[rgb(245,241,241)] shadow-[12px_12px_2px_1px_rgba(46,88,125,0.2)">
      
      {/* Name */}
      <div className="ml-[30px] mt-2 text-[20px] font-[Arial] font-bold">
        <h1>{name}</h1>
      </div>

      {/* Order button */}
      <button className="relative left-[300px] text-white cursor-pointer bg-gradient-to-r from-[#f0a04b] to-[#e67e22] border-2 border-[#cf711f] rounded-3xl h-[48px] m-0.5 px-[12px] py-[10px] font-[Segoe UI, sans-serif] text-[15px] transition: background .3s, transform .2s shadow-xl w-[150px] p-2 cursor-pointer">
        
        Order Now</button>

      {/* Box */}
      <div className="border-2 border-[rgb(202,199,199)] w-1/2 h-[50%] flex flex-col items-start ml-[25px] mt-[-50] rounded-[25px] p-[10px] shadow-[12px_12px_2px_1px_rgba(46,88,125,0.2)]">
        
        {/* Rating */}
        <div className="text-[12px] font-['Trebuchet_MS']">
          Rating - {avgRatingString} stars
        </div>

        {/* Cuisines */}
        <div className="text-red-600 text-[10px]">
          <h3>{cuisines.join(", ")}</h3>
        </div>

        {/* Delivery time */}
        <div className="text-[12px] mb-[5px] font-['Trebuchet_MS']">
          <span>{minDeliveryTime}</span> - 
          <span className="font-extrabold"> {maxDeliveryTime} minutes</span> - Delivery Time
        </div>

        {/* Cost for two */}
        <div className="text-[12px] font-['Trebuchet_MS']">
          {costForTwoMessage}
        </div>
      </div>
    </div>
  </div>
</div>


  {catagories.map((category, index)=>{
     return <RestaurantCategory
      key={index}
      data={category?.card?.card}/>
  })}





   <div className="newOffer">
   <div className="h-[80px] w-full flex justify-center items-center mt-4 text-[30px] font-extrabold font-[cursive] bg-[#f2e0e0] text-[#e67e22] ">Recommended for You...</div>
<div className="menuItems">
  <ul>
    {itemCards.map((item) => (
      <li className="flex justify-between" key={item.card.info.id}>
        <div className="w-[80%] h-auto border-b-[1px] border-b-[rgb(177,177,177)] border-b-dashed flex ml-[300px] cursor-pointer">
          <div className="w-[40%] flex flex-col justify-center items-center gap-1 ">
            <div className="text-2xl font-bold">
            {item.card.info.name} - Rs.{" "}
            {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
            </div>
            <div className="text-[small]">
              {item.card.info.description}
            </div>
          </div>
          <div className="w-[60%] h-[200px] flex justify-center p-5">
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
