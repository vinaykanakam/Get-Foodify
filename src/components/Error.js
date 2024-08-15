import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err= useRouteError();

    console.log(err);
    return(
        <div>
            <h1>Ops..!</h1>
            <h2>The Page you are searching for is not Available.. Please check the URL</h2> 
            <h3>{err.status}: {err.statusText}</h3>

        </div>
    )
}

export default Error;