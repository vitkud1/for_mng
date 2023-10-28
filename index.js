const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const kitten_routes = require('./routes/kitten')

app.use(cors({
    origin: ['*']
}))

app.use('/api/v1/kitten', kitten_routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})