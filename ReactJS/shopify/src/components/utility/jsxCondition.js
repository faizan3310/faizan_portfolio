function JSXcondition () {
    var username = "Jackson";
    var marks = [87,88,83,82,89];
    var empDetails = {
        name: "Krish",
        age: 21,
        gender: "Male",
        dept: "IT",
        location: "Hyderabad",
    };
    
    for(var key in empDetails){
        console.log(key);
        console.log(empDetails[key]);
    }

    console.log(empDetails);
    console.log(Object.keys(empDetails));

    return(
        <>
            <p>JSX condition component</p>
            <p>User Name : {username}</p>
            
            {
                marks.map((value,index)=>(
                    <p key={index}>{index} : {value}</p>
                ))
            }

            {
                Object.keys(empDetails).map((val)=>(
                    <p key={val}>{val} : {empDetails[val]}</p>
                ))
            }
            
        </>
        
    )
}
export default JSXcondition;