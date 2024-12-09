export function useOTPcustomHook() {
    var OTPvalue = `${getRandomValue()}${getRandomValue()}${getRandomValue()}${getRandomValue()}`; 
    return OTPvalue;
}

function getRandomValue() {
    return Math.round((Math.random() * 9));
}