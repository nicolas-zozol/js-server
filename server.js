const express = require('express')
const app = express()
const port = 8000

app.use(express.json());

app.get('/api/v1/service', (req, res) => {
    res.send('Running service is perfectly working!')
})

app.post('/api/v1/quote', (req, res) => {
    const url = req.url
    console.log('/quote: getting url', url)
    const protocol = req.query.protocol
    const route = req.query.route
    const content = req.body
    content.protocol = protocol
    content.route = route
    content.url=url

    console.log('sending back these data:', content)
    res.send(content)
})

app.post('/api/v1/:protocol/:route', (req, res) => {
    const url = req.url
    console.log('/protocol/route: getting url', url)

    const protocol = req.params.protocol
    const route = req.params.route
    const content = req.body
    content.protocol = protocol
    content.route = route

    console.log('sending back these data:', content)
    res.send(content)
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})