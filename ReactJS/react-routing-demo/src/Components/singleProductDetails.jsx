import { Link } from "react-router-dom";

function SingleProductDetail (props){
    // console.log(props);
    return(
        <>
            <li>
                <ul>
                    <li>
                        <img src= {props.data.image}/>
                    </li>
                    <li>{props.data.title}</li>
                    <li>
                        <Link to={`/view pdtDetails/${props.data.id}/${props.data.price}`}>
                            <button className="btn btn-primary">     
                                    View Details              
                            </button>
                        </Link>
                    </li>
                </ul>
            </li>
        </>
    )
}

export default  SingleProductDetail;