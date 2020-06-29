const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send("Hello !"))

const blogRouter = require('./routes/blog');

app.use('/api/blog/', blogRouter)

app.listen(PORT, () => {
    console.log(`App running on PORT : ${PORT}`)
})