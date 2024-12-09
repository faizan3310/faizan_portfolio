import { useEffect} from "react";
function HomeComp() {
    useEffect(() => {
        console.log("Home component got mounted");
        return() => {
            // method gets invoked automatically when this component gets unmounted
            console.log("Home component got Unmounted");
        }
    }, [])
    return(
        <div>Home component got loaded</div>
    )
}

export default HomeComp;