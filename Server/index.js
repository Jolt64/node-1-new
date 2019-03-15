const express = require('express');

const app = express()

const controller = require('./controller/controller')

app.get('/api/products', controller.getAllProducts)

app.get('/api/product/:id', controller.getItem)

const port = 4040
app.listen(port, () => console.log(`${port} wizards summoning things`))