const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
app.use(cors())

const data = require('./products.json')

app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.get('/products', (req, res) => {
    res.json(data)
})

app.listen(process.env.PORT || port)