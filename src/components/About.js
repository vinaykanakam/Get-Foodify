import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContex";


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
            <div>
                <h1>About</h1>
                <div>
                    LoggedIn User
                    <UserContext.Consumer>
                        {({loggedInUser})=> (<h1 className="font-bold text-xl">{loggedInUser}</h1>)}
                    </UserContext.Consumer>
                </div>
                <UserClass userData={"second"} location={"Hyderabad"}/>
            </div>
            
        )

    }

}

export default About;