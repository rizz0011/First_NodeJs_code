const express = require("express")


const app = express()

app.get('/', (req, res) => {
    return res.send('Home page')
})

app.get('/about', (req, res) => {
    return res.send('About page')
})



app.listen(8000, () => console.log('server is running on port 8000'))
