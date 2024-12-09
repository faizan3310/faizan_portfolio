import axios from "axios";
import { useEffect, useState } from "react";
import "./pdtContainer.css"
import SingleProductDetail from "./singleProductDetails";

function Jewelery() {

    const [data,setData] = useState([]);

    var url = "https://fakestoreapi.com/products/category/jewelery";
    useEffect(()=> {
        axios.get(url).then((response) => {
            // console.log(response.data);
            setData(response.data);
        })
    }, []);

    return(
        <div>
            <h3>Jewelery Items</h3>

            <ul className="productDetailsContainer">
                {
                    data.map((item) => (
                       <SingleProductDetail data={item}></SingleProductDetail>                
                    ))
                }
            </ul>

        </div>
    )
}
export default Jewelery;

