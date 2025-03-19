import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import "./pdtContainer.css"

function MoreProductDetails() {
    var userParams = useParams();
    // console.log(userParams);

    const [productData, setProductData] = useState({});

    useEffect(() => {
        var url = "https://fakestoreapi.com/products/" + userParams.id; 
        axios.get(url).then((response) => {
            // console.log(response.data);
            setProductData(response.data);
        })
    }, []) 

    return(
        <div className="row">
            
            <div className="morePdtDetail col-6">
                <h3>{productData.title}</h3>
                <img src= {productData.image}></img>
                <h2>Category - {productData.category}</h2>  

                <Link to = {`/${productData.category}`} >
                    <button className="btn btn-primary">Back to {productData.category}</button>
                </Link>                 

                <br/><br/>

                <Link to = {`moreInfo/${productData.id}`}>
                    <button className="btn btn-primary">Show More Details</button>
                </Link>

            </div>

            <div className="col-4">
                <Outlet></Outlet>
            </div>

        </div>
    )
}

export default MoreProductDetails;