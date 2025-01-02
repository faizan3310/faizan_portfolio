// CAPTCHA GENERATOR

let captchaText = '';

var captchLib = (()=>{

    const generate = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const captchLength = 5;
        captchaText = '';
        for (let i = 0; i < captchLength; i++) {
            captchaText += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return captchaText;
    
    }
    const draw = (canvasEle) => {
        
        const ctx = canvasEle.getContext('2d');
        canvasEle.width = 150;
        canvasEle.height = 50;
    
        ctx.clearRect(0, 0, canvasEle.width, canvasEle.height);
    
        ctx.font = '30px italic';
        //ctx.fillStyle = '#000';
        ctx.fillText(captchaText, 20, 35);
    
        ctx.strokeStyle = 'red';
        for (let i = 0; i < 5; i++) {
            ctx.beginPath();
            ctx.moveTo(Math.random() * canvasEle.width, Math.random() * canvasEle.height);
            ctx.lineTo(Math.random() * canvasEle.width, Math.random() * canvasEle.height);
            ctx.stroke();
        }
    }
    
    const validate = (userEnteredCaptcha) => {
        
        if (userEnteredCaptcha != captchaText) {
            return false;
        }
        return true;
    
    }

    return {
        generateCaptcha(){
            return generate();
        },

        drawCaptcha(canvasEle){
            return draw(canvasEle);
        },

        validateCaptcha(userEnteredCaptcha){
            return validate(userEnteredCaptcha);
        }

    };
    

})();

