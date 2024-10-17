import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

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
      locality

    } = resData?.info;

    return(
        <div data-testid="resCard" className="m-4 p-4 w-[230px] h-[380px] rounded-lg  hover:bg-purple-200 flex flex-col hover:scale-90 transition-all duration-200 ease-in-out z-0">
            <img className="rounded-lg h-40 w-full object-cover"  
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId}
            />
            <div className="flex flex-col flex-grow p-2 pt-1"> 
                <h3 className="font-bold py-2 text-xl" >{name}</h3>
                <h4 className="whitespace-nowrap overflow-hidden text-ellipsis">{cuisines.join(", ")}</h4>
                <h4 >{avgRating}star-{sla.deliveryTime}min</h4>
                <h4 >{costForTwo} </h4>
                <h4 className="whitespace-nowrap overflow-hidden text-ellipsis">{locality}</h4>
            {/* <h4>User : {loggedInUser}</h4> */}
            </div>
        </div>
    )
} 

export default RestaurantCard;