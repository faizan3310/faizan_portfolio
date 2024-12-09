import axios from "axios";
import { useEffect, useRef, useState } from "react";

export function ProductSlider() {

    const[singleProduct, setSingleProduct] = useState({});

    var count = useRef(1);
    var myIntrvl = useRef(null); 

    useEffect(()=>{
        getProductData(count.current);
    }, []);

    function getProductData(id) {
        var url = `https://fakestoreapi.com/products/${id}`;
        axios.get(url).then((response) => {
            // console.log(response);
            // console.log(response.data);
            setSingleProduct(response.data);
            // console.log(singleProduct);
            
        }).catch(() => {

        }).finally(() => {

        })
    }

    function loadNextProduct() {
        if(count.current == 20){
            return;
        }
        count.current++;
        getProductData(count.current);
    }

    function loadPrevProduct() {
        if(count.current == 1){
            return;
        }
        count.current--;
        getProductData(count.current);
    }

    function doPlayJob(){
        myIntrvl.current = setInterval(()=>{
            loadNextProduct();
        }, 2000);
    }

    function doPauseJob() {
        clearInterval(myIntrvl.current);
    }

    return(

        <div className="fluid-container">
            
            <div className="col-md-3"></div> 

            <div className="col-md-6 slideShowContainer">
                <div className="row">
                    <div className="col-md-2 btn btn-primary prevBtn" onClick={loadPrevProduct} >Prev</div>
                    
                    <div className="col-md-8">
                        <div className="card" style={{width: '350px'}}>
                            <img className="card-img-top" src={singleProduct.image} alt="img about to come"/>
                            <div className="card-body">
                                <h5 className="card-title">{singleProduct.title}</h5>
                                <p className="card-text">{singleProduct.description
                                }</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-2 btn btn-primary nxtBtn" onClick={loadNextProduct}>Next</div>
                </div>
                <div>
                    <div className="btn btn-primary" onClick={doPlayJob}>Play</div>
                    <div className="btn btn-primary" onClick={doPauseJob}>Pause</div>
                </div>
            </div> 
            
            <div className="col-md-3"></div>

        </div>

    )
}