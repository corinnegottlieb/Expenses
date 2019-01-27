const express = require(`express`)
const api = require(`./server/routes/api`)
const bodyParser = require (`body-parser`)

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const mongoose = require(`mongoose`)
mongoose.connect(`mongodb://localhost/expenseDB`, {useNewUrlParser: true})

app.use(`/`, api)

const port = 8200
app.listen(port, function() {
    console.log(`Running on port ${port}`)
})