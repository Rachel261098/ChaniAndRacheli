// var http = require('http');
// var formidable = require('formidable');
// var fs = require('fs');
// var nodemailer = require('nodemailer');
// http.createServer(function (req, res) {
//   if (req.url == '/fileupload') {
//     var form = new formidable.IncomingForm();
//     form.parse(req, function (err, fields, files) {
//       var oldpath = files.filetoupload.path;
//       var newpath = 'C:/Users/' + files.filetoupload.name;
//       fs.rename(oldpath, newpath, function (err) {
//         if (err) throw err;
//         res.write('File uploaded and moved!');
//         res.end();
//       });
//  });
//   } else {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//     res.write('<input type="file" name="filetoupload"><br>');
//     res.write('<input type="submit">');
//     res.write('</form>');
//     return res.end();
//   }
// }).listen(8080);


// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'limtzobiclick@gmail.com',
//     pass: 'knmutcekhe'
//   }
// });

// var mailOptions = {
//   from: 'limtzobiclick@gmail.com',
//   to: 'nk0527139330@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'הי נחמי כאן רחלי אני שולחת מייל מNODEJS'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });
var mgdb=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/mydb";
mgdb.connect(url,function(err,db){
   
    if(err) throw err;
    else
{ 
    var dbo=db.db("mydb")
    var myobj = [
        { name: 'John', address: 'Highway 71'},
        { name: 'Peter', address: 'Lowstreet 4'},
        { name: 'Amy', address: 'Apple st 652'},
        { name: 'Hannah', address: 'Mountain 21'},
        { name: 'Michael', address: 'Valley 345'},
        { name: 'Sandy', address: 'Ocean blvd 2'},
        { name: 'Betty', address: 'Green Grass 1'},
        { name: 'Richard', address: 'Sky st 331'},
        { name: 'Susan', address: 'One way 98'},
        { name: 'Vicky', address: 'Yellow Garden 2'},
        { name: 'Ben', address: 'Park Lane 38'},
        { name: 'William', address: 'Central st 954'},
        { name: 'Chuck', address: 'Main Road 989'},
        { name: 'Viola', address: 'Sideway 1633'}
      ];
    dbo.collection('coustomer').insertMany(myobj,function(err,res){
        if(err)throw err;
        else{
        console.log("Adding!!!");
        db.close();
        }
    })
    
    
}
});