var express = require('express');  
var app = express();  
var bodyParser = require('body-parser');
var port=8000  
// Create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  
app.use(express.static('public'));  
app.get('/get', function (req, res) {  
   res.send('hey' );  
})  
app.post('/process_post', urlencodedParser, function (req, res) {  
   // Prepare output in JSON format  
   response = {  
       first_name:req.body.first_name,  
       last_name:req.body.last_name  
   };  
   console.log(response);  
   res.end(JSON.stringify(response));  
})  

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}) 