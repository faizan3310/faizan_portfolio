var getRandomPattern = () => {  // generates a Random sequence pattern if user had not given any pattern 
    var pattern = '';
    var possiblePattern = ['U','L','N'];
    for (var i = 0; i < 5; i++){
        var randomIndex = (Math.floor(Math.random() * 3));
        pattern += possiblePattern[randomIndex];
    }
    console.log("Randomly generated pattern is " +pattern);
    return pattern;
}

var getCaptcha = (custom_CaptchaPattern) => {

    var pattern;
    /* if(custom_CaptchaPattern){
        pattern = custom_CaptchaPattern;
    }else {
        pattern = getRandomPattern();
    } */

    pattern = (custom_CaptchaPattern) ? custom_CaptchaPattern : getRandomPattern();

    pattern = pattern.split(''); // convert string into array 
    // console.log(pattern);
    
    var captchaValue = '';
    for(var i = 0; i < pattern.length; i++){
        // console.log(pattern[i]);
        captchaValue = captchaValue + getRandomCharORNumber(pattern[i]);     
    }   
    return captchaValue;  
}

/**
 * 
 * @param {string} | type U/L  
 */
var getRandomCharORNumber = (type) => {
    type = type.trim();
    type = type.toUpperCase();    
    var minRange, maxRange;
    switch(type){
        case 'U':  // for uppercase 
            minRange = 65;
            maxRange = 90;
            break;
        case 'L':  // for lowercase 
            minRange = 97;
            maxRange = 122;
            break;
        case 'N':  // for number
            return (Math.round(Math.random() * 9));
    }
    var randomAsciiNumber = (Math.round(Math.random() * (maxRange - minRange) + minRange));
    return String.fromCharCode(randomAsciiNumber);
}

// console.log(getRandomCharORNumber('N '));
// console.log(getRandomCharORNumber('U'));
// console.log(getRandomCharORNumber('l'));

// console.log(getCaptcha());