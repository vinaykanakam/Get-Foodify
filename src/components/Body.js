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
    const [corsNeeded, setCorsNeeded] = useState(false);
    const [showInstructions, setShowInstructions] = useState(false); // State for showing instructions

    //const {loggedInUser, setUserName} = useContext(UserContext);

    const onlineStatus = useOnlineStatus();

    console.log("body rendered..!", listOfRestaurants);

    useEffect(() => { 
      fetchData();
    }, []);

    const fetchData = async () => {
        try {
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
        } catch (error) {
            console.error("Error fetching data, likely due to CORS policy: ", error);
            setCorsNeeded(true);  // Show CORS extension page
        }
    };

    // If CORS extension is required, show a message
    if (corsNeeded) {
        return (
          <div className="flex justify-center py-10">
            <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4">CORS Extension Required</h1>
                <p className="mb-4 text-lg text-gray-800">
                  To access the application, you'll need to enable CORS. 
                  Please follow these steps to proceed:
                </p>
                <ol className="mb-4 list-decimal pl-5 text-gray-700">
                    <li className="mb-2">
                        <a 
                            href="https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-blue-500 underline hover:text-blue-700"
                        >
                            Click here to open the CORS Unblock extension page.
                        </a>
                    </li>
                    <li className="mb-2">Press the "Add to Chrome" button to install the extension.</li>
                    <li className="mb-2">Once installed, find the extension icon in the upper-right corner of your Chrome browser.</li>
                    <li className="mb-2">Click the icon and toggle the switch to activate the extension.</li>
                    <li >After enabling the extension, click the Retry button to refresh the app.</li>
                </ol>
                <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded" 
                    onClick={() => {
                        setCorsNeeded(false); // Reset CORS needed state
                        fetchData(); // Retry fetching data
                    }}
                >
                    Retry
                </button>
            </div>
          </div>
        );
    }


    
    if(onlineStatus=== false) return <h1>"Ops! Looks like you are offline, Check your internet connection "</h1>

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
                placeholder="Search"
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

            <div className="flex flex-col items-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {
              filteredRestaurant.map((restaurant, index) => (
              <Link key={`${restaurant.info.id}-${index}`} to={"/restaurants/"+ restaurant.info.id}>
              <RestaurantCard resData={restaurant} />
              </Link>
              ))} 
              </div>
            </div>
            

        </div>
    )
}

export default Body;