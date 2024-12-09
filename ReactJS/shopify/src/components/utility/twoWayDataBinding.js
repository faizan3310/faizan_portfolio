import { useState } from "react";

const TwoWayDataBinding = () => {
    // var userName = "Jack";

    const [userName,setUserName] = useState("");
    function handleNameChange(event) {
        // console.log(event);
        // console.log(event.target.value);
        setUserName(event.target.value);
    }
    return(
        <div>
            <div>
                Enter user name: <input type="text" value={userName} onChange={handleNameChange}></input>
            </div>
            <ul>
                <li>User name is {userName}</li>
            </ul>
        </div>
    )
}

export default TwoWayDataBinding;