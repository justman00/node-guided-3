const express = require("express")
const morgan = require("morgan");
const proxy = require('express-http-proxy');

const logger = require('./middlewares/logger')
const deny = require('./middlewares/deny')
const error = require('./middlewares/error')
const welcomeRouter = require("./welcome/welcome-router")
const usersRouter = require("./users/users-router")

const server = express()

// server.use(deny());
server.use(logger('combined'))
server.use(express.json())
server.use('/my-special-proxy', proxy('www.sumup.com'));


server.use(welcomeRouter)
server.use(usersRouter)

server.use(error)

module.exports = server
