import { useEffect} from "react";
function ContactComp() {
    useEffect(() => {
        console.log("Contact component got mounted");
        return() => {
            // method gets invoked automatically when this component gets unmounted
            console.log("Contact component got Unmounted");
        }
    }, [])
    return(
        <div>Contact component got loaded</div>
    )
}

export default ContactComp;