import { useRef, useState } from "react";

const DebouncingTimeout = () => {
    const [notificationMsg, setNotificationMsg] = useState('');
    
    var s1 = useRef(null);
    var s2 = useRef(null);
    var s3 = useRef(null);

    function handleGetNotifications () {
        s1.current = setTimeout(() => {
            setNotificationMsg("About to receive updates on latest Technologies");
        }, 2000);
        s2.current = setTimeout(() => {
            setNotificationMsg("Machine Learning and Artifial Intellingence are Booming");
        }, 4000);
        s3.current = setTimeout(() => {
            setNotificationMsg("AI and ML can take up various creative Jobs");
        }, 6000);
    }

    function handleStopNotifications() {
        clearTimeout(s1.current);
        clearTimeout(s2.current);
        clearTimeout(s3.current);
    }

    /*
    function showMsg() {
        console.log("From show message function");
    } */
    // showMsg();
    /*
    setTimeout(() => {
        showMsg();
    }, 3000); */

    return(
        <div>

            <div className="debouncingBlock">
                {notificationMsg}
            </div>

            <button onClick={handleGetNotifications} className="btn btn-primary">Get Notifications</button>
   
            <button onClick={handleStopNotifications} className="btn btn-primary">Stop Notifications</button>

        </div>
    )
}
export default DebouncingTimeout;

/*
    For better understanding of setTimeout() we are commenting <React.StrictMode> in index.js
 */