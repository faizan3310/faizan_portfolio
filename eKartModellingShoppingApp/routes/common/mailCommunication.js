var nodemailer = require("nodemailer");

const sendMail = async (email, subject, data) => {
    const trasport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "webdev.prasad@gmail.com",
        pass: "gnzr bghj xjng ycxw",
      },
    });
    const mailcontent  = `<!DOCTYPE HTML>
            <html>
              <head>
                <title>Mail from shoppin gapp</title>
                <style>
                  b {
                    color: green;
                  }
                </style>
                </head>
              <body><B>Plase use this OTP for further login...</B></body></html>`
  
    await trasport.sendMail({
      from: "webdev.prasad@gmail.com",
      to: "nareshitkphb@gmail.com",
      subject: subject + '1',
      html: mailcontent // html, text
    });
  }
  module.exports = sendMail;