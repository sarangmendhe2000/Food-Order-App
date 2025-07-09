import { useEffect , useState } from "react";
import Sheemer from "./Sheemer";
import { useParams } from "react-router-dom";
import { RESTMENU_URL } from "../utils/constants";


const RestaurantMenu = () =>{

    const [resInfo , setResInfo] = useState(null);
    // const param = useParams();
    // console.log(param)

    const{resId} = useParams();

    useEffect(()=>{
        fetchMenu();
    }, []);

   const fetchMenu = async() =>{
    const data = await fetch( RESTMENU_URL + resId);

    const json = await data.json();
    setResInfo(json.data)

    console.log(json);
    

   }
if(resInfo === null)  
{
    return <Sheemer />
}


   const {name , avgRatingString ,  costForTwoMessage , cuisines } = resInfo?.cards[2]?.card?.card?.info  || {} ;
   const regularCards = 
        resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

    const menuCard = regularCards.find(
        (c) => c?.card?.card?.itemCards
    );

    const itemCards = menuCard?.card?.card?.itemCards;

    console.log(itemCards);


    return(
        <div>
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{avgRatingString}</h3>
            <h3>{costForTwoMessage  }</h3>

            <h2>Menu</h2>
            <ul>
                {itemCards.map(item =>
                     <li key={item.card.info.id}>
                    {item.card.info.name} - Rs. {item.card.info.defaultPrice/100 || item.card.info.price/100}
                    </li>
                     )}
                {/* <li>{itemCards[0].card.info.name}</li>
                <li>{itemCards[1].card.info.name}</li>
                <li>{itemCards[2].card.info.name}</li> */}
            </ul>
        </div>
    )
}

export default RestaurantMenu;