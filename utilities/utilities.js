const https = require('https');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "pacificlift.info@gmail.com",
        pass: "aqdqcogibgrgmdag"
    }
});


function cronJob (){
    setInterval(() => {
        https.get('https://pacific-lift-server.onrender.com', (res) => {
            console.log('pinging...');
        })
    }, 840000);
}

async function sendQuery(data) {
    if (!transporter) return { status: 'failed', msg: 'no transporter found' };

    try {
        const info = await transporter.sendMail({
            from: '"Pacific Lift Service 👻" <pacificlift.info@gmail.com>', // sender address
            to: "kanon754@gmail.com", // list of receivers
            subject: "New Contact Query Received", // Subject line
            text: "A customer wants to contact. Please respond asap", // plain text body
            html: `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Your Awesome Email</title>
            </head>
            <body>
                <div style="width: 100%;">
                    <div style="width: 100%; display: flex; justify-content: flex-start; align-items: center;">
                        <span style="padding: 5px; box-sizing: border-box;">Full name</span>
                        <span style="padding: 5px; box-sizing: border-box;">${data.name}</span>
                    </div>
                    <div style="width: 100%; display: flex; justify-content: flex-start; align-items: center;">
                        <span style="padding: 5px; box-sizing: border-box;">Phone number</span>
                        <span style="padding: 5px; box-sizing: border-box;">${data.phone}</span>
                    </div>
                    <div style="width: 100%; display: flex; justify-content: flex-start; align-items: center;">
                        <span style="padding: 5px; box-sizing: border-box;">Email address</span>
                        <span style="padding: 5px; box-sizing: border-box;">${data.email}</span>
                    </div>
                    <div style="width: 100%; display: flex; justify-content: flex-start; align-items: center;">
                        <span style="padding: 5px; box-sizing: border-box;">Additional info</span>
                        <span style="padding: 5px; box-sizing: border-box;">${data.query}</span>
                    </div>
                </div>
            </body>
            </html>`
        });

        return { status: 'success', msg: `Message sent to ${info.messageId}` };
    } catch (error) {
        return { status: 'failed', msg: 'failed to send mail' }
    }
}


module.exports = {
    cronJob,
    sendQuery
}