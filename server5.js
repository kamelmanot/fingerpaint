// Try express alternative
// Make paths
// Path to fix 
// Path to clean
// Path to return list of things to buy
// Path for specefic items



var express = require('express')
var https = require('https')
var http = require('http')
var app = express()
var port = 8000
const host = 'localhost';



http.createServer(app).listen(port, host, () => {
    console.log(`Example app listening on port ${port}`)
}
)

app.get('/', (req, res) => {
    console.log('hey');
    res.send('Hello World!')
})
app.post('/post', (req, res) => {
    res.status(200)
    console.log('hey');
    res.send('Hello World!')
})


app.post('http://localhost:8000/posting', (req, res) => {
    res.status(200)
    console.log('hey');
    res.send('Hello World!')
})

