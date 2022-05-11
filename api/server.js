// implement your server here
// require your posts router and connect it here
const express = require('express')
const apiRoute = express.Router();

apiRoute.get('/', (req, res) => {
    res.status(200).send("hello from apiroute /api")
})

module.exports = apiRoute;