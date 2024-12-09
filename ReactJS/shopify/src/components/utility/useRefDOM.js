import { useRef } from "react";

const UseRefDOM = () => {

    var textBoxRef = useRef(null);

    function applyChanges() {
        // document.querySelector("#userTextbox").focus();
        // document.querySelector("#userTextbox").style.backgroundColor = "red";
        textBoxRef.current.focus();
        textBoxRef.current.style.backgroundColor = "cyan";
    }

    return(
        <div>
            {/* <input type="text" id="userTextbox"></input> */}
            <input type="text" ref={textBoxRef}></input>
            <button className="btn btn-primary" onClick={applyChanges}>Apply</button>
        </div>
    )
}
export default UseRefDOM;