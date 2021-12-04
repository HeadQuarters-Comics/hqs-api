const express = require('express')

const routes = express.Router()

const User = require('./controllers/hq-controller')

//routes.get('/', Produto.index)

// Rotas de usuários
//routes.post('/api/register', User.create)
//routes.post('/api/login', User.verify)
routes.get('/api/hqs/', User.index)
routes.get('/api/hqs/ordered', User.index)
routes.get('/api/hqs/category', User.index)
//routes.delete('/api/produtos/:id', Produto.delete)
//routes.put('/api/produtos', Produto.update)

module.exports = routes