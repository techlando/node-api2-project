// require your server and launch it here
const express = require('express');
const apiRoute = require('./api/server');
const postRoute = require('./api/posts/posts-router');

const server = express();

server.use('/api', apiRoute);
server.use('/api/posts', postRoute);

server.use('/', (req, res) => {
    res.send('server up and runing')
})

server.listen(5000, () => {
    console.log("SERVER RUNNING ON 5000")
})
