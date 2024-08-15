import React from "react";

class Userclass extends React.Component{

    constructor(props){
        super(props);

        this.state={
            count1 : 0,
        }
        console.log(this.props.userData+"Child Constructor")
    }

    async componentDidMount(){

        const data= fetch("");


        console.log(this.props.userData+"Child CDidmount")
    }

    render(){
        const {userData, location}= this.props;
        const {count1} = this.state;

        console.log(this.props.userData+"Child Render");

        return(
            <div className="user-card">
                <h2>{count1}</h2>
                <button onClick={()=>{
                    this.setState({
                        count1 : this.state.count1 + 1
                    });

                }}>Count</button>
                <h2>{userData}</h2>
                <h2>{location}</h2>
            </div>
        )
    }

}

export default Userclass;