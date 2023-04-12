const express = require('express')
const routeUser = express.Router()
const ctrlUser = require('../controller/ctrluser')

// Get Data & post data In user
routeUser.get('/user',ctrlUser.getUser)
routeUser.get('/user/:id_user',ctrlUser.getUserparam)
routeUser.post('/user',ctrlUser.postUser)
routeUser.put('/user/:id_user',ctrlUser.putUser)
routeUser.delete('/user/:id_user',ctrlUser.deleteUser)

module.exports = routeUser
