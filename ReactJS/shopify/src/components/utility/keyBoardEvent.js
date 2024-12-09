import { useState } from "react";

const KeyboardEventsDataValidation = () => {
    const[accountID, setAccountID] = useState('');
    const[accountPwd, setAccountPwd] = useState('');
    const[statusMsg, setStatusMsg] = useState('');
    const[progbarPercent, setProgbarPercent] = useState(0);
    const[progbarClass, setProgbarClass] = useState('');

    function handleAccountIDchange (event) {
        setAccountID(event.target.value);       
    }

    function handleAccountPwdchange (event) {
        var userPwd = event.target.value;
        setAccountPwd(userPwd);
        console.log(userPwd.length);
        console.log(userPwd);

        /* Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character */
        
        var pwdRegex = /(^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$)/;
        console.log(userPwd.match(pwdRegex));

        if(userPwd.match(pwdRegex)){
            setStatusMsg("Strong Password");
            setProgbarPercent(100);
            setProgbarClass("bg-success");
        }else if (userPwd.length < 6) {
            setStatusMsg("Weak Password");
            setProgbarPercent(30);
            setProgbarClass("bg-danger");            
        }else if(userPwd.length < 8){
            setStatusMsg("Password can be Better");
            setProgbarPercent(60);
            setProgbarClass("bg-warning");
        }
    }

    return(
        <div>
            <ul className="detailsContainer">
                
                <li> 
                    <input className="form-control" maxLength={10} type='text' placeholder='Enter Account ID' value={accountID} onChange={handleAccountIDchange}></input>
                </li>
                <li> 
                    <input className="form-control" type='password' placeholder='Enter Account Password' value={accountPwd} onChange={handleAccountPwdchange}></input>
                    <div>{statusMsg}</div>
                </li>
                <li>
                    <div className="progress">
                        <div className= {`progress-bar progress-bar-striped ${progbarClass}`}  role="progressbar" style={{width: `${progbarPercent}%` }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </li>
            </ul>
        </div>
    
    )
}

export default KeyboardEventsDataValidation;