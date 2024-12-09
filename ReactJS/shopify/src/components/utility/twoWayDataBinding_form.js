import { useState } from "react";
import './app.css'
function FormComponents(){

    /*
    const [userName,setUserName] = useState('');
    const [userAge,setUserAge] = useState('');
    var handleUserNameChange = (event) =>{
        setUserName(event.target.value);
    }
    var handleUserAgeChange = (event) =>{
        setUserAge(event.target.value);
    }
    */

    const [userDetails, setUserDetails] = useState({});

    var handleValueChange = (event) => {
        // console.log(event);
        var value = event.target.value;
        console.log(value);

        var name = event.target.name;
        console.log(name);

        setUserDetails({[name]:value});
    }

    var handleFormSubmit = (event) => {
      
    }
   
    return(
        <div>
            <form onSubmit={handleFormSubmit}>
                <ul className="detailsContainer">
                    <li>
                        Enter User Name: 
                        <input type="text" name="username" value={userDetails.uname} onChange={handleValueChange}></input>
                    </li>
                    <li>
                        Enter User Age:
                        <input type="number" name="userage" value={userDetails.uage} onChange={handleValueChange}></input>
                    </li>
                    <input type="Submit"></input>
                </ul>
            </form>  

                <ul className="detailsContainer">
                    <li>
                        Student Name is : {userDetails.username}
                    </li>
                    <li>
                        Student Age is : {userDetails.uage}
                    </li>
                </ul>  
        </div>

    )
}
export default FormComponents;