import { useState } from 'react';
import './login.css'
import { useCookies } from 'react-cookie';

function LoginPage() {
    const [userID, setUserID] = useState('');
    const [userPwd, setUserPwd] = useState('');
    const [userData, setUserData] = useState('');
    const [cookie, setCookie, deleteCookie] = useCookies();

    function handleIDchange(event) {
        setUserID(event.target.value); 
    }

    function handlePWDchange(event) {
        setUserPwd(event.target.value);
    }

    function handleBtnClick() {
        setUserData({
            accntID : userID,
            accntPwd : userPwd
        });
        console.log(userID);
        console.log(userPwd);
        console.log(userData)
    }

    return(
        <div>
            <ul className="loginBlock">
                <li>
                    <input type="text" placeholder="Enter User ID" id="userID" onChange={handleIDchange}/>
                </li>
                <li>
                    <input type="password" placeholder="Enter Account Password" id="userPWD" onChange={handlePWDchange}/>
                </li>
                <li>
                    <button onClick={handleBtnClick} className='btn btn-primary'>Login</button>
                </li>
            </ul>
        </div>
    )
}

export default LoginPage;