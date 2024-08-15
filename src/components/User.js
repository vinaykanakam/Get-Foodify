import About from "./About";

const User=({userData, location})=>{
    
    return(
        <div className="user-card">
            <h2>{userData}</h2>
            <h2>{location}</h2>
        </div>
    )
}
export default User;