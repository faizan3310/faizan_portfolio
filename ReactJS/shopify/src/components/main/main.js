import './main.css'
function MainContainer() {
    var userName = 'Raj';
    var userAge = 21;
    var userGender = "Male";
    var location = {
        state: "Hyderabad",
        city: "Ameerpeet",
        landmark: "Satyam Theatre",
        pinCode: 500105
    }

    return(

        <div className="mainContent">
            Name: {userName} <br/>
            Age: {userAge} <br/>
            Gender: {userGender} <br/>
            State: {location.state} <br/>
            City: {location.city} <br/>
            Landmark: {location.landmark} <br/>
            Pincode: {location.pinCode} <br/>
            
            <input type="text" id='userSal' placeholder='Enter User Salary'/>
        </div>
    )
}

export default MainContainer;