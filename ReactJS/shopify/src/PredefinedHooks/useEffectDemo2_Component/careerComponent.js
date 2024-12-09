import { useEffect} from "react";

function CareerComp() {
    useEffect(() => {
        console.log("Career component got mounted");
        return() => {
            // method gets invoked automatically when this component gets unmounted
            console.log("Career component got Unmounted");
        }
    }, [])
    return(
        <div>Career component got loaded</div>
    )
}

export default CareerComp;