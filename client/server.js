const log = console.log
const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('/'))
app.use(express.static(__dirname + '/'))

const renderPage = (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
    app.use(function (_, response) {
        response.sendFile(__dirname + "/kline.js")
    })
}
app.get('/', renderPage)

const renderPageCsv = (req, res) => {
    res.sendFile(path.join(__dirname, '/data.csv'))
    return res.sendStatus(200)
}
app.get('/data.csv', renderPageCsv)

const server = app.listen('4001', () => log(`Kline Data Server started http:/localhost:4001`))