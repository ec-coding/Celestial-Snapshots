const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 4000

app.use(bodyParser.json())
app.use(express.static('public'))

app.listen(4150, function() {
    console.log('listening on 4150')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})