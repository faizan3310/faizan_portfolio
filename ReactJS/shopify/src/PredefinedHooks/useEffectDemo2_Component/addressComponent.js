import { useEffect} from "react";

function AddressComp() {
    useEffect(() => {
        console.log("Address component got mounted");
        return() => {
            // method gets invoked automatically when this component gets unmounted
            console.log("Address component got Unmounted");
        }
    }, [])
    return(
        <div>Address component got loaded</div>
    )
}

export default AddressComp;