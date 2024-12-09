function MainSub () {
    //  Implementing data binding with different datatypes in react
    var name = "Jack";
    var age = 21;
    var isFeepaid = false;
    var marks = [78,75,79,81,77];
    var data = {    
        name : 'Jonas',
        age : 20,
        location : "Hyderabad",
    }
    return(

        <div className="subContent">
            <p >Hello EveryOne</p>
            <p> User Name : {name}</p>
            <p> User Age : {age}</p>

            {/* <p> Fees Status : {isFeepaid}</p>  */}
            <p> Fees Status : {isFeepaid.toString()}</p>
            <p> Fees Status : {isFeepaid+ ''}</p>
            <p> Fees Status : {String(isFeepaid)}</p>

            <p>User Marks : {marks}</p>
            <p>User Marks : {marks[3]}</p>

            
            {/* <p>User Data : {data}</p>  */}
            <p>User Data : {JSON.stringify(data)}</p>
            <p>User Data 1 : {data.name}</p>
            <p>User Data 2 : {data.age}</p>
            <p>User Data 3 : {data.location}</p>

            {/* sample text demonstrating comment */}

        </div>

    )
}

export default MainSub;