import { useState } from "react";

function FormTag() {

    const[userData, setUserData] = useState({});

    function handleFormSubmit(event) {
        event.preventDefault(); // preventing data to get appended in the url
        console.log("Form about to get Submit");
    }

    function handleNameChange(event) {
        var userDetails = userData;
        userDetails.uName = event.target.value; 
        console.log(userDetails);
        setUserData(userDetails);
    }
    function handleAgeChange(event) {
        var userDetails = userData;
        userDetails.uAge = event.target.value; 
        console.log(userDetails);
        setUserData(userDetails);
    }
    function handleGenderChange(event) {
        var userDetails = userData;
        userDetails.uGender = event.target.value; 
        console.log(userDetails);
        setUserData(userDetails);
    }    
    function handleCountryChange(event) {
        var userDetails = userData;
        userDetails.uCountry = event.target.value; 
        console.log(userDetails);
        setUserData(userDetails);
    }
    return(
        <div>

            <form onSubmit={handleFormSubmit}>
                <ul className="formData">
                    <li>
                        Enter User Name 
                        <input type="text" name="username" onChange={handleNameChange}></input>
                    </li>
                    <li>
                        Enter User Age
                        <input type="number" name="userage" onChange={handleAgeChange}></input>
                    </li>
                    <li>
                        Select Gender
                        <input type="radio" name="gender" value="male" onClick={handleGenderChange}></input>Male
                        <input type="radio" name="gender" value="female" onClick={handleGenderChange}></input>Female
                    </li>
                    <li>
                        Select Country of resident
                        <select name="countryName" onChange={handleCountryChange}>
                            <option value="">Select Country</option>
                            <option value="india">India</option>
                            <option value="japan">Japan</option>
                            <option value="sweden">Sweden</option>
                            <option value="norway">Norway</option>
                            <option value="germany">Germany</option> 
                        </select>
                    </li>
                    <li>
                        <button className="btn btn-primary">Save Details</button>
                    </li>
                </ul>
            </form>  

              
        </div>

    )
}
export default FormTag;