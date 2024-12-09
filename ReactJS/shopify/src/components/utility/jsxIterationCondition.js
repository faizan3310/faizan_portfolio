import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import './app.css'
function ShowFeeStatus (Details) {
    
    console.log(Details);
    console.log(Details.stdName);
    console.log(Details.feeStatus);    

    /*
    if (Details.feeStatus){
        return (<b className="success"> {Details.stdName} - {String(Details.feeStatus)} - Thanks for paying the Fee</b>)
    }else{
        return (<b className="pending"> {Details.stdName} - {String(Details.feeStatus)} - Please pay the Fee when possible</b>)
    }
    */

    // Above code with Conditional Operator
    
    return (Details.feeStatus ? <b className="success">Thanks for paying the Fee</b> : <b className="pending"> Please pay the Fee when possible</b>)
    
}

function JSXIterationCondition() {
    var studentDetails = [
        {name :'Raj', age: 21, gender: 'Male', dept: 'CS', location: "Nashik", isFeepaid: true},
        {name :'Sachin', age: 21, gender: 'Male', dept: 'IT', location: "Pune", isFeepaid: false},
        {name :'Seema', age: 20, gender: 'Female', dept: 'CS', location: "Mumbai", isFeepaid: false},
        {name :'Jack', age: 21, gender: 'Male', dept: 'ENTC', location: "Nashik", isFeepaid: true},
        {name :'Khizar', age: 21, gender: 'Male', dept: 'ME', location: "Mumbai", isFeepaid: false},
        {name :'Saina', age: 21, gender: 'Female', dept: 'CS', location: "Nagpur", isFeepaid: true},
    ]
    return(
        <>
            <h3>Student Details</h3>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Sr.no</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Department</th>
                        <th>Location</th>
                        <th>Fees Paid</th>
                        <th>Fee Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentDetails.map((data,index)=>(
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{data.name}</td>
                                <td>{data.age}</td>
                                <td>{data.gender}</td>
                                <td>{data.dept}</td>
                                <td>{data.location}</td>
                                <td>{String(data.isFeepaid)}</td>

                                <td>
                                    {/* <ShowFeeStatus feeStatus={data.isFeepaid} stdName={data.name}></ShowFeeStatus> */}
                                    {
                                        data.isFeepaid &&
                                            <p className="success">Thank You for paying the fee</p>
                                    }
                                    {
                                        !data.isFeepaid &&
                                        <p className="pending">Please Pay the Fee ASAP</p>
                                    }
                                </td>

                            </tr>
                        ))  
                    }
                </tbody>
            </table>
        </>
    )
}
export default JSXIterationCondition;