import axios from "axios";
import { useEffect, useState } from "react";

var FetchData = () => {
    const[spacecraftsData, setSpacecraftsData] = useState([]);

    var dataAPI = "https://isro.vercel.app/api/spacecrafts";

    /*
    useEffect(() => {
        console.log("I am from use effect method");
    }, []);
    */

    // Getting data With Fetch Method
    /*
    fetch(dataAPI).then(response => response.json()).then((responseObj)=> {
        console.log(responseObj);
    });
    */

    // code within useEffect get executed onload of the page 
    useEffect(() => {
        axios.get(dataAPI)
        .then((responseObj)=>{
            console.log(responseObj);
            setSpacecraftsData(responseObj.data.spacecrafts);
            console.log(spacecraftsData);
        }).catch(()=>{  

        }).finally(()=>{

        });
    },[]);
    
    //Getting data With Axios
    /*
    axios.get(dataAPI)
        .then((responseObj)=>{
            console.log(responseObj);
            setSpacecraftsData(responseObj.data.spacecrafts);
            console.log(spacecraftsData);
        }).catch(()=>{  

        }).finally(()=>{

        });
    */

    return(
        <div>
            <input type="text" placeholder="Search Text"></input> 
            <table className="table table-dark">

                <thead>
                    <tr>
                        <th>Sr.no</th>
                        <th>Spacecraft Name</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        spacecraftsData.map((spaceCraft)=>(
                            <tr key={spaceCraft.id}>
                                <td>{JSON.stringify(spaceCraft.id)}</td>
                                <td>{JSON.stringify(spaceCraft.name)}</td>
                            </tr>
                        ))   
                    }   

                </tbody>

            </table>

        </div>
    )
}

export default FetchData;