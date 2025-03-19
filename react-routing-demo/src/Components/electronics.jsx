import axios from "axios";
import { useEffect, useState } from "react";
import "./pdtContainer.css"
import SingleProductDetail from "./singleProductDetails";
function Electronics() {
    const [data,setData] = useState([]);

    var url = "https://fakestoreapi.com/products/category/electronics"

    useEffect(() => {
        axios.get(url).then((response => {
            // console.log(response.data);
            setData(response.data);
        }))
    }, [])

    return(
        <div>
            <h3>Electronic Products</h3>
            <ul className="productDetailsContainer">
                {
                     data.map((item) => (
                    //     <li>
                    //        <ul>
                    //            <li>
                    //                <img src= {item.image}/>
                    //            </li>
                    //            <li>{item.title}</li>
                    //            <li>
                    //                <button className="btn btn-primary">View Details</button>
                    //            </li>
                    //        </ul>
                    //    </li>

                        <SingleProductDetail data={item}></SingleProductDetail>

                    ))
                }        
            </ul>

        </div>
    )
}

export default Electronics;

