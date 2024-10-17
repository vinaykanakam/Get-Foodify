import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";


class About extends Component{

    constructor(props){
        super(props);
        console.log("Parent Constructor")
    }
    componentDidMount(){
        console.log("Parent CDidMount")
    }

    render(){

        console.log("Parent Render");
        return (
            <div className="p-8 bg-gray-100">
                <h1 className="text-3xl font-bold mb-4">About Us</h1>
                <p className="mb-4">
                    Welcome to Foodify, a Swiggy-like food ordering app. 
                    This app is a side project aimed at deep diving into React and Redux.
                </p>
                <h2 className="text-2xl font-semibold mt-6 mb-2">Project Overview</h2>
                <p className="mb-4">
                    Foodify features Restaurant search, Top rated restaurants, cart functionality, and various other essentials to enhance food ordering experience.
                    Throughout this project, I had the opportunity to brush up on key React concepts while also exploring new techniques for handling live API data.
                </p>
                <h2 className="text-2xl font-semibold mt-6 mb-2">Key Features</h2>
                <ul className="list-disc list-inside mb-4">
                <li><strong>🔍 Smart Search</strong>: Quickly find restaurants with dynamic search.</li>
                <li><strong>🛒 Cart Management</strong>: Easily add, remove, and review your cart items.</li>
                <li><strong>📦 API Integration</strong>: Access real-time data from Swiggy’s live API (CORS extension needed).</li>
                <li><strong>✅ Lazy Loading</strong>: Enjoy faster performance with optimized loading ⚡.</li>
                <li><strong>✅ Cart Feature-Redux</strong>: Manage your food choices effortlessly.</li>
                <li><strong>⭐ Top Rated Restaurants</strong>: Filter restaurants based on their ratings for the best dining experience.</li>
                <li><strong>✅ Custom UI</strong>: Benefit from a flexible user interface using custom hooks 💡.</li>
                <li><strong>✅ Shimmer UI</strong>: Experience smooth loading with a pleasant shimmer effect 🚀.</li>
   
                </ul>

                <p>
                    While the app itself is straightforward, it has provided an excellent opportunity to revisit core React practices like state management, 
                    API handling, and UI/UX optimization. Thank you for checking out Foodify!
                </p>
            </div>
            
            
        )

    }

}

export default About;