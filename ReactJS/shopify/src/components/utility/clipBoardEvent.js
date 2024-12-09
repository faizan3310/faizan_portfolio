import { useState } from "react";

function ClipBoardEvent() {

    const[accountNo, setAccountNo] = useState('');
    const[raccountNo, setRaccountNo] = useState('');
    const[isCopy, setIsCopy] = useState(false);
    const[userStatusMsg, setUserStatusMsg] = useState('');

    function handleAccountNoChange (event) {
        setAccountNo(event.target.value);
    }
    
    function  handleReAccountNoChange (event) {
        setRaccountNo(event.target.value);
    }

    function handleCopy (event) {
        console.log(event);
        setUserStatusMsg("Account no been copied to Clipboard");
        setIsCopy(true);
    }

    function handleCutAction (event) {
        console.log(event);
        setUserStatusMsg("Account no been Cut to Clipboard");
        setIsCopy(true);
    }

    function handlePasteAction (event) {
        console.log(event);  
        setUserStatusMsg("Paste is not allowed");
        setTimeout(() => {
            setRaccountNo('');
        }, 50);
        // setIsCopy(true); not needed,for pasting we need to copy or cut, at that time its ture
    }

    return(
        <div>

           <ul className="detailsContainer">
                
                <li> 
                    <input className="form-control" placeholder='Enter Account Number' value={accountNo} onCopy={handleCopy} onCut={handleCutAction} onChange={handleAccountNoChange}></input>
                    
                    {
                        isCopy &&
                            <div>{userStatusMsg}</div>
                    }
                    
                </li>
                
                <li> 
                    <input className="form-control" placeholder='Re-enter Account Number' value={raccountNo} onPaste={handlePasteAction} onChange={handleReAccountNoChange}></input>
                </li>

            </ul>

        </div>

    )
}

export default ClipBoardEvent;