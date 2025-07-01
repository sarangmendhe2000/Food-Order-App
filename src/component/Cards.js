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
        <div className="cards">
          <div >
            <img className="img" src={ CARD_URL + restData.info.cloudinaryImageId }></img>
          </div>
          <div className="description">
            <h3><b>{name}</b></h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5><b>{avgRating} stars </b></h5>
            <h5><b>{costForTwo}</b></h5>
            <h5><b>Delivery in {restData.info.sla.deliveryTime} minutes </b></h5>
          </div>
        </div>
  );
};

export default Cards ;
