const express = require('express')

const app = express()

app.use(express.json())

app.get('/', () => {
    console.log('This is the get request')
})

app.listen(80, () => {
    console.log('Listening on port 4000')
})