import { CARD_URL } from "../utils/constants";

const Cards = (props) =>{
  const {restData} = props;

  const {
    cloudinaryImageId,
    name, 
    cuisines,
    avgRating,
    costForTwo, 
    deliveryTime
  } = restData?.info
  return(
        <div className="group cursor-pointer w-[280px] h-[400px] transition-all duration-400 ease-in-out rounded-[18px] shadow-[8px_8px_8px_rgba(230,126,34,0.45)] hover:bg-gradient-to-r hover:from-[#d6dde36b] hover:to-[#c1dce382] hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] hover:w-[270px] hover:h-[370px] p-1 m-3 bg-[rgba(240,240,240,0.9)] ">
          <div >
            <img className="h-[220px] w-[270px] transition-transform duration-500 ease-in-out rounded-[12px] group-hover:scale-[1.08] group-hover:-rotate-[1deg] group-hover:shadow-[0_6px_18px_rgba(0,0,0,0.15)] group-hover:rounded-[16px]" src={ CARD_URL + restData.info.cloudinaryImageId }></img>
          </div>
          <div className="m-2.5 p-0.5 ">
            <h3><b>{name}</b></h3>
            <h4 className="m-[2px] p-[2px] text-[13px] font-light">{cuisines.join(", ")}</h4>
            <h5 className="m-[2px] p-[2px] text-[13px] font-light"><b>{avgRating} stars </b></h5>
            <h5 className="m-[2px] p-[2px] text-[13px] font-light"><b>{costForTwo}</b></h5>
            <h5 className="m-[2px] p-[2px] text-[13px] font-light"><b>Delivery in {restData.info.sla.deliveryTime} minutes </b></h5>
          </div>
        </div>
  );
};

// Higher Order Component 

export const addedLabel = (Cards) =>{
  return (props) =>{
    return(
      <div className="relative">
        <label className="absolute bg-gray-900 text-white m- p-2 rounded-2xl font-extrabold italic">Top Rated</label>
        <Cards {...props}/>
      </div>
    )
  }
}
export default Cards ;
