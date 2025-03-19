import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function MoreInfoDetails() {

    let params = useParams();
    // console.log(params);

    const [productData, setProductData] = useState({"rating" : {"rate": 0,"count": 0}});

    useEffect(() => {
        var url = "https://fakestoreapi.com/products/" + params.id; 
        axios.get(url).then((response) => {
            console.log(response.data);
            setProductData(response.data);
        })

    }, [])

    return(
        <div>
            {/* From outlet... */}
            <h3>Product Description</h3>

            {productData.description}
            <br></br>

            <b>Rating: </b> {productData.rating.rate} - ({productData.rating.count})

            <br></br>
            <br></br>

            <Link to={`/view pdtDetails/:${productData.id}/:${productData.price}`}>
                <button className="btn btn-primary">Show Less Details</button>
            </Link>
            
        </div>
    )
}

export default MoreInfoDetails;