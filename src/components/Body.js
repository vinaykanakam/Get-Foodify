import RestaurantCard from "./RestaurantCard"; 
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = () => {

    const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    const [filteredRestaurant, setfilteredRestaurant] = useState([]);

    const [searchText, setsearchText]= useState("");

    const {loggedInUser, setUserName} = useContext(UserContext);

    console.log("body rendered..!", listOfRestaurants);

    useEffect(() => { 
      fetchData();
    }, []);

    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
    
      const json = await data.json();

      // Extract all restaurants from all cards
      const allRestaurants = json?.data?.cards.flatMap(card => 
      card.card?.card?.gridElements?.infoWithStyle?.restaurants || []
      );

      // Set both lists
      setlistOfRestaurants(allRestaurants);
      setfilteredRestaurant(allRestaurants);

      console.log("All Restaurants:", allRestaurants);


      // Log the IDs of filtered restaurants
      // allRestaurants.forEach(restaurant => {
      //   console.log(restaurant.info.id);
      // });
      // const json= await data.json();
      // //console.log(json);
      // setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      // setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      
    };

    const OnlineStatus = useOnlineStatus();
    if(OnlineStatus=== false) return <h1>"Ops! Looks like you are offline, Check your internet connection "</h1>

    //Loading screen
    if(listOfRestaurants.length === 0) {
      return <Shimmer/>
    };
    
    return (
        <div className="min-h-screen pt-2">
            <div className="flex justify-center items-center m-4 p-4">

              <div className="search">
              <input 
                type="text"
                data-testid="searchInput"
                className="bg-gray-100 border border-solid border-black px-2 py-1 mr-2 sm:mr-4 sm:px-4 hover:bg-white transition" 
                value={searchText}
                onChange={(e)=>{
                  setsearchText(e.target.value);
                }}
              />
              </div>
              <button
                className="bg-gray-300 px-4 py-2 rounded-lg mr-6 hover:bg-gray-400 transition"
                onClick={()=>{
                  const filteredRestaurant=listOfRestaurants.filter(
                    (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
                  );
                  setfilteredRestaurant(filteredRestaurant);
                }}
              >
                Search
              </button>
              
              {/* <div className="p-4 m-4 flex items-center flex-col"> */}
              <button className="px-4 py-2 bg-gray-300 rounded-lg  hover:bg-gray-400 transition" 
                onClick={()=>{
                  const filteredList=listOfRestaurants.filter(
                    (res)=>res.info.avgRating>4.3
                  );
                  console.log("top restaurants search")
                  console.log(filteredList)
                  setfilteredRestaurant(filteredList)

              }}>Top rated Restaurants
              </button>
              

              {/* <div className="search flex m-4 p-4 items-center">
                <label>UserName : </label>
                <input className="border border-black p-2"
                      value={loggedInUser}
                      onChange={(e)=>{
                        setUserName(e.target.value);
                        }}
                />
              </div> */}
               
            </div>

            {/* <div className="flex flex-wrap justify-center">
            {
              filteredRestaurant.map(restaurant => (
              <Link key={`${restaurant.info.id}-${restaurant.info.name}`} to={"/restaurants/"+ restaurant.info.id}>
              <RestaurantCard resData={restaurant}/>
              </Link>
            ))} 
            </div> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
            filteredRestaurant.map((restaurant, index) => (
            <Link key={`${restaurant.info.id}-${index}`} to={"/restaurants/"+ restaurant.info.id}>
            <RestaurantCard resData={restaurant} />
            </Link>
            ))} 
            </div>

        </div>
    )
}

export default Body;