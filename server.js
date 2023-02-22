const express = require('express')
const app = express()
const port = 3000

app.get('/api/v1/service', (req, res) => {
    res.send('Running service is perfectly working!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})