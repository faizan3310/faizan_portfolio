import { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import './app.css';

const StudentDetailsBinding = () => {
    const [userName,setUserName] = useState("");
    const [userAge, setUserAge]= useState("");
    const [userGender, setUserGender] = useState("");
    const [userCountry, setUserCountry] = useState("");

    const [userDetailsObj, SetUserDetailsObj] = useState({});

    function handleNameChange(event) {
        setUserName(event.target.value);
    }
    function handleAgeChange(event){
        setUserAge(event.target.value);
    }
    function handleGenderChange(event) {
        // console.log(event.target.value);
        setUserGender(event.target.value);
    }
    function handleCountryChange(event){
        // console.log(event.target.value);
        setUserCountry(event.target.value);
    }


    function saveUserDetails(){
        SetUserDetailsObj({userName,userAge,userGender,userCountry});
    }
 
    return(
        <div>
            <ul className="detailsContainer">
                <li>
                    Enter Student Name:   
                    <input type='text' className='form-control' value={userName} onChange={handleNameChange}></input>
                </li>
                <li>
                    Enter Age:
                    <input type='number' className='form-control' value={userAge} onChange={handleAgeChange}></input>
                </li>
                <li>
                    Select Gender:
                    <input type='radio' name='gender' value="MALE" onChange={handleGenderChange} className='form-check-input'></input>Male
                    <input type='radio' name='gender' value="FEMALE"  onChange={handleGenderChange} className='form-check-input'></input>Female
                </li>
                <li>
                    Select Country: 
                    <select className="form-select" onChange={handleCountryChange} value={userCountry}>
                        <option value="japan">Japan</option>
                        <option value="dubai">Dubai</option>
                        <option value="india">India</option>
                        <option value="norway">Norway</option>
                        <option value="germany">Germany</option>
                        <option value="ireland">Ireland</option>
                    </select>
                </li>
                <li>
                    <input type='button' value="Save Details" onClick={saveUserDetails}></input>
                </li>
            </ul>

            <h3>
                Registered Student Details 
            </h3>

            <ul className="detailsContainer">
                <li>
                    Student Name is : {userDetailsObj.userName}
                </li>
                <li>
                    Student Age is : {userDetailsObj.userAge}
                </li>
                <li>
                    Student Gender is : {userDetailsObj.userGender}
                </li>
                <li>
                    Student Country is : {userDetailsObj.userCountry} 
                </li>
            </ul>
        </div>
    )
}

export default StudentDetailsBinding;