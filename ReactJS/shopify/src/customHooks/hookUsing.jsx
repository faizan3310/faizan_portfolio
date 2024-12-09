import { useState } from "react";
import { useOTPcustomHook } from "./otpCustomHook";

function UsingCustomHook() {
    const [userOtp, setUserOtp] = useState(0);
    
    let otp = useOTPcustomHook();

    var handleChange = () => {
        // otp = useOTPcustomHook(); // error
        setUserOtp(otp); 
    }

    return(
        <div>
            Random OTP: <b> <span>{userOtp}</span> </b>
            <div onClick={handleChange}>Reload</div>
        </div>
    )
}
export default UsingCustomHook;