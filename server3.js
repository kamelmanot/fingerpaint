const express = require('express');
const http = require('http')
const app = express();
const port = 8000

server=http.createServer(app)
app.use(express.json());

app.post('/post', (req, res) => {
    console.log('hey')
    console.log(req.body);
    res.status(200)

});
app.get('/', (req, res) => {
    console.log('hey');
    res.send('Hello World!')
})

//app.listen(port, () => {   console.log(`Example app listening on port ${port}`)})
server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
 }
 )