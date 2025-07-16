import { useState , useEffect } from "react";
import { RESTMENU_URL } from "../utils/constants";
import RestaurantMenu from "../component/RestaurantMenu";
import { json } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useParams } from "react-router-dom";

const useRestaurantMenu = () =>{

    const[resInfo , setResInfo] = useState(null);

    const { resId } = useParams();

    useEffect(()=>{
        fetchData();
    } , []);
    const fetchData = async() =>{
    const data = await fetch(RESTMENU_URL+resId);

    const json = await data.json();
    setResInfo(json.data);
};

   

return resInfo;    
   
};




export default useRestaurantMenu;