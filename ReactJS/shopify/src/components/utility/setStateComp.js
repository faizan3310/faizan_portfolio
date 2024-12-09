import { useState } from "react";

function SetState() {
    var age = 22;
    const [counter, setCounterValue] = useState(50);
    function handleClickEvent(){
        console.log(counter);
        setCounterValue(z=> z +1);
        console.log(counter);
        console.log(age);
        console.log(age);
    }
    return(
        <div>
            Set State component  
            <br/>

            <b>Counter Value : {counter}</b>
            <br/>

            <button onClick={handleClickEvent}>Change Value</button>
            <br/>

            <b>Counter Value : {counter}</b>
            <br/>
                    
        </div>
    )
}
export default SetState;