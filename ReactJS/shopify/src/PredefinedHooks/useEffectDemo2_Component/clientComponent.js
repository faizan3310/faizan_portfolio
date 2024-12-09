import { useEffect} from "react";

function ClientComp() {
    useEffect(() => {
        console.log("Client component got mounted");
        return() => {
            // method gets invoked automatically when this component gets unmounted
            console.log("Client component got Unmounted");
        }
    }, [])
    return(
        <div>Client component got loaded</div>
    )
}

export default ClientComp;