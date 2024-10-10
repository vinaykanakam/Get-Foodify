import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContex";

const RestaurantCard = (props) => {
    const {resData} = props;

    console.log(resData);
    
    const {loggedInUser}=useContext(UserContext)
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      sla,
      deliveryTime

    } = resData?.info;

    return(
        <div data-testid="resCard" className="m-4 p-4 w-[200px] rounded-lg bg-gray-200 hover:bg-gray-400">
            <img className="rounded-lg"  
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId}
            /> 
            <h3 className="font-bold py-4 text-xl" >{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}star</h4>
            <h4>{costForTwo} </h4>
            <h4>{sla.deliveryTime}minutes</h4>
            <h4>User : {loggedInUser}</h4>
        </div>
    )
} 

export default RestaurantCard;