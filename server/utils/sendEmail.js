const nodemailer = require('nodemailer');

module.exports = async (email, subject, text) => {
    try {

        const transporter = nodemailer.createTransport({
            host: 'smtp.email.com',
            port: 587,
            auth: {
                user: 'bibhabasu.nssc@gmail.com',
                pass: 'tfmq lbzj gndj qiyq'
            }
        });

        await transporter.sendMail({
            from: 'bibhabasu.nssc@gmail.com',
            to: email,
            subject: subject,
            text: text,
        });
        console.log("Email sent successfully");

    }
    catch (error) {
        console.log(error);
        console.log("Could not send email");
    }
}







// const transporter = nodeMailer.createTransport({
//     host: process.env.HOST,
//     service: process.env.SERVICE,
//     port: Number(process.env.EMAIL_PORT),
//     secure: Boolean(process.env.SECURE),
//     auth: {
//         user: process.env.USER,
//         pass: process.env.PASS,
//     },
// });