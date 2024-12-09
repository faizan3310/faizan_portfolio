function JsxIteration () {
    var userMarks = [90,92,95,93];
    var studentDetails = [
        {name: "Raj", age: 21, gender: 'Male', location: "Mumbai", dept: "IT", id: 1},
        {name: "Krish", age: 21, gender: 'Male', location: "Nashik", dept: "R&D", id: 2},
        {name: "Meena", age: 20, gender: 'Female', location: "Pune", dept: "Sales", id: 3},
        {name: "Amar", age: 20, gender: 'Male', location: "Hyderabad", dept: "Network", id: 4},
        {name: "Teena", age: 20, gender: 'Female', location: "Vizag", dept: "IT", id: 5},
    ]
    return(
        <div>
            <b>UserMarks : {userMarks}</b>
            {
                userMarks.map((value)=> (
                    <p key={value}>marks : {value}</p>
                ))
            }

            <b>Student Details</b>
            {
                <table>
                    <thead>
                        <tr>
                           <th>Name</th>
                           <th>Age</th>
                           <th>Gender</th>
                           <th>Location</th>
                           <th>Department</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            studentDetails.map((data)=>(
                                <tr key={data.id}>
                                    <td>{data.name}</td>
                                    <td>{data.age}</td>
                                    <td>{data.gender}</td>
                                    <td>{data.dept}</td>
                                    <td>{data.location}</td>
                                </tr>
                            ))   
                        }
                    </tbody>
                </table>
            }
        </div>
    )
}
export default JsxIteration;