
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ramkumarnathan55@gmail.com',   
        pass: 'fntz fciu gbri lqph'            
    }
});

let mailOptions = {
    from: 'ramkumarnathan55@gmail.com',
    to: 'amlakshmiarumugam@mepcoeng.ac.in',
    subject: 'Test Mail - exercise 4.1 (nodemailer)',
    html: '<h3>Respected Mam</h3><p>This is a test mail for exercise 4.</p><br><p>nodemailer module using dotenv for security purpose -- from Ramkumar 23bad114 Btech AIDS B</p>'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Mail sent: ' + info.response);
    }
});

