import RestaurantCard from "./RestaurantCard"; 
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContex";


const Body = () => {

    const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    const [filteredRestaurant, setfilteredRestaurant] = useState([]);

    const [searchText, setsearchText]= useState([]);

    const {loggedInUser, setUserName} = useContext(UserContext);

    console.log("body rendered..!", listOfRestaurants);

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
    if(OnlineStatus=== false) return <h1>"Ops! Looks like you are offline, Check your internet connection "</h1>

    //Loading screen
    if(listOfRestaurants.length === 0) {
      return <Shimmer/>
    };
    
    return (
        <div className="body">
            <div className="filter flex">
              <div className="search m-4 p-4">
              <input 
                type="text"
                data-testid="searchInput"
                className="border border-solid border-black" 
                value={searchText}
                onChange={(e)=>{
                  setsearchText(e.target.value);
                }}
              />
              
              <button
                className="bg-gray-300 px-2 py-1 m-4 rounded-lg"
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
              <div className="p-4 m-4 flex items-center">
              <button className="px-2 py-1 bg-gray-300 rounded-lg" 
                onClick={()=>{
                  const filteredList=listOfRestaurants.filter(
                    (res)=>res.info.avgRating>4
                  );
                  console.log("top restaurants search")
                  console.log(filteredList)
                  setfilteredRestaurant(filteredList)

              }}>Top rated Restaurants</button>
              </div>

              <div className="search flex m-4 p-4 items-center">
                <label>UserName : </label>
                <input className="border border-black p-2"
                      value={loggedInUser}
                      onChange={(e)=>{
                        setUserName(e.target.value);
                        }}
                />
              </div>
               
            </div>

            <div className="flex flex-wrap">
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