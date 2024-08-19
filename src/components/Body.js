import RestaurantCard from "./RestaurantCard"; 
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    const [filteredRestaurant, setfilteredRestaurant] = useState([]);

    const [searchText, setsearchText]= useState([]);

    console.log("body rendered..!");

    useEffect(() => { 
      fetchData();
    }, []);

    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
    
      const json= await data.json();
      //console.log(json);
      setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const OnlineStatus = useOnlineStatus();
    if(OnlineStatus=== false) return <h1>"Ops! Looks like you are offline"</h1>

    //Loading screen
    if(listOfRestaurants.length === 0) {
      return <Shimmer/>
    };

    
    return (
        <div className="body">
            <div className="filter">
              <div className="search">
              <input 
                type="text" 
                className="search-box" 
                value={searchText}
                onChange={(e)=>{
                  setsearchText(e.target.value);
                }}
              />
              
              <button
                onClick={()=>{
                  const filteredRestaurant=listOfRestaurants.filter(
                    (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
                  )
                  setfilteredRestaurant(filteredRestaurant);
                }}
              >
                Search
              </button>
              </div>
              <button className="filter-btn" 
                onClick={()=>{
                  const filteredList=listOfRestaurants.filter(
                    (res)=>res.info.avgRating>4
                  );
                  console.log("top restaurants search")
                  console.log(filteredList)
                  setfilteredRestaurant(filteredList)
                  

              }}>Top rated Restaurants</button>
            </div>

            <div className="res-container">
              {
                filteredRestaurant.map(restaurant => (
                  <Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}>
                    <RestaurantCard resData={restaurant}/>
                  </Link>
              ))} 
            </div>
        </div>
    )
}

export default Body;