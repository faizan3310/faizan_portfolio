import { useState } from "react";

function UseStateComp(){
    // var userName = "Raj"; 
    const[userName,setUserName] = useState("Raj");
    const[counter,setCounterValue] = useState(0);
    const[price,setPriceValue] = useState(100);
    
    function handleChangeName(){
        // var userName = "Krish";
        
        setUserName("Krish");
        console.log(userName);

        setCounterValue(a => a + 1);
        console.log(counter);

        // setPriceValue(150);
        // console.log(price);

        setTimeout(()=>(
            setPriceValue(150)
        ), 3000);   // 3 seconds after clicking on button price will become 150
    }
  return(
    <div>
        <div>User name is : {userName}</div>
        <div>Count value is : {counter}</div>
        <div>Price is : {price}</div>
        <button onClick={handleChangeName}>change name</button>
    </div>
  )
}
export default UseStateComp;