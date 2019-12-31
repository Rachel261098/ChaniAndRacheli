var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rg0583246827@gmail.com',
    pass: 'rg318926185'
  }
});

var mailOptions = {
  from: 'rg0583246827@gmail.com',
  to: 'rg0583246827@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});