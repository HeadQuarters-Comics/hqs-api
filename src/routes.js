const express = require('express')

const routes = express.Router()

const HQs = require('./controllers/hq-controller')

//routes.get('/', Produto.index)

// Rotas de usuários
//routes.post('/api/register', User.create)
//routes.post('/api/login', User.verify)
routes.get('/api/hqs/', HQs.index)
routes.get('/api/hqs/releases', HQs.releases)
routes.get('/api/hqs/publishers', HQs.publishers)
routes.get('/api/hqs/:publisher', HQs.filtered)
//routes.put('/api/produtos', Produto.update)

module.exports = routes