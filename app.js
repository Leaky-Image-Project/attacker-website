const express = require('express')
const app = express()
const port = 3000
// const path = require('path')

var bodyParser = require('body-parser')

app.use(express.static(__dirname));
app.use(express.static('img'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

app.post('/visited', function (req, res) {
    console.log("The targeted victim visited the website!")
    return res.end('done')
})

app.post('/notvisited', function (req, res) {
    console.log("Someone else visited the website!")
    return res.end('done')
})