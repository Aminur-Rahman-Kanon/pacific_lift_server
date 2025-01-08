const https = require('https');
const nodemailer = require('nodemailer');



function cronJob (){
    setInterval(() => {
        https.get('https://pacific-lift-server.onrender.com', (res) => {
            console.log('pinging...');
        })
    }, 840000);
}

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "pacificlift.info@gmail.com",
        pass: "aqdqcogibgrgmdag"
    }
});

async function sendContactQuery(data) {
    if (!transporter) return { status: 'failed', msg: 'no transporter found' };

    try {
        const info = await transporter.sendMail({
            from: '"Pacific Lift Service" <pacificlift.info@gmail.com>', // sender address
            to: "ar.mithu25@gmail.com", // list of receivers
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


async function sendQuoteQuery(data) {
    if (!transporter) return { status: 'failed', msg: 'no transporter found' };

    try {
        const info = await transporter.sendMail({
            from: '"Pacific Lift Service" <pacificlift.info@gmail.com>', // sender address
            to: "ar.mithu25@gmail.com", // list of receivers
            subject: "A New Quote Request Received", // Subject line
            text: "A customer wants a quatation. Please respond asap", // plain text body
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
                        <span style="padding: 5px; box-sizing: border-box;">${data.message}</span>
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


async function sendProductsQuery(data) {
    if (!transporter) return { status: 'failed', msg: 'no transporter found' };

    try {
        const info = await transporter.sendMail({
            from: '"Pacific Lift Service" <pacificlift.info@gmail.com>', // sender address
            to: "ar.mithu25@gmail.com", // list of receivers
            subject: "A New Product Query Received", // Subject line
            text: "A customer wants a quatation. Please respond asap", // plain text body
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
                        <span style="padding: 5px; box-sizing: border-box; font-weight: bolder;">Product</span>
                        <span style="padding: 5px; box-sizing: border-box; font-weight: bolder;">${data.category}</span>
                    </div>
                    <div style="width: 100%; display: flex; justify-content: flex-start; align-items: center;">
                        <span style="padding: 5px; box-sizing: border-box;">Full name</span>
                        <span style="padding: 5px; box-sizing: border-box;">${data.name}</span>
                    </div>
                    <div style="width: 100%; display: flex; justify-content: flex-start; align-items: center;">
                        <span style="padding: 5px; box-sizing: border-box;">Email address</span>
                        <span style="padding: 5px; box-sizing: border-box;">${data.email}</span>
                    </div>
                    <div style="width: 100%; display: flex; justify-content: flex-start; align-items: center;">
                        <span style="padding: 5px; box-sizing: border-box;">Company name</span>
                        <span style="padding: 5px; box-sizing: border-box;">${data.company}</span>
                    </div>
                    <div style="width: 100%; display: flex; justify-content: flex-start; align-items: center;">
                        <span style="padding: 5px; box-sizing: border-box;">Address</span>
                        <span style="padding: 5px; box-sizing: border-box;">${data.address}</span>
                    </div>
                    <div style="width: 100%; display: flex; justify-content: flex-start; align-items: center;">
                        <span style="padding: 5px; box-sizing: border-box;">Stop/Opening</span>
                        <span style="padding: 5px; box-sizing: border-box;">${data.stop}</span>
                    </div>
                    <div style="width: 100%; display: flex; justify-content: flex-start; align-items: center;">
                        <span style="padding: 5px; box-sizing: border-box;">Shaft size</span>
                        <span style="padding: 5px; box-sizing: border-box;">${data.shaft}</span>
                    </div>
                    <div style="width: 100%; display: flex; justify-content: flex-start; align-items: center;">
                        <span style="padding: 5px; box-sizing: border-box;">Capacity</span>
                        <span style="padding: 5px; box-sizing: border-box;">${data.capacity}</span>
                    </div>
                    <div style="width: 100%; display: flex; justify-content: flex-start; align-items: center;">
                        <span style="padding: 5px; box-sizing: border-box;">Head room height</span>
                        <span style="padding: 5px; box-sizing: border-box;">${data.headRoomHeight}</span>
                    </div>
                    <div style="width: 100%; display: flex; justify-content: flex-start; align-items: center;">
                        <span style="padding: 5px; box-sizing: border-box;">PIT</span>
                        <span style="padding: 5px; box-sizing: border-box;">${data.pit}</span>
                    </div>
                    <div style="width: 100%; display: flex; justify-content: flex-start; align-items: center;">
                        <span style="padding: 5px; box-sizing: border-box;">Machine room</span>
                        <span style="padding: 5px; box-sizing: border-box;">${data.machineRoom}</span>
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
    sendContactQuery,
    sendQuoteQuery,
    sendProductsQuery
}