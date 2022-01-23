const express = require('express')

const routes = express.Router()

const HQs = require('./controllers/hq-controller')

//routes.get('/', Produto.index)

// Rotas de usuários
routes.get('/api/hqs/', HQs.index)
routes.get('/api/hqs/releases', HQs.releases)
routes.get('/api/hqs/publishers', HQs.publishers)
routes.get('/api/hqs/:publisher', HQs.filtered)

module.exports = routes