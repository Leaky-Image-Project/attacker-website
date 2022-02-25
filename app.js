const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

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
    const d = new Date();
    var logcontent = "The targeted victim visited on : " + d + "\n"
    fs.appendFile('victimlog.txt', logcontent, function (err) {
        if (err) return console.log(err);
    });
    return res.end('done')
})

app.post('/notvisited', function (req, res) {
    console.log("Someone else visited the website!")
    return res.end('done')
})