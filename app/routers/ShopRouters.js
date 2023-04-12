const express = require('express')
const routeShop = express.Router()
const ctrlShop = require('../controller/ctrlshop')

// Get Data & post data In user
routeShop.get('/shop',ctrlShop.getShop)
routeShop.get('/shop/:id_brg',ctrlShop.getShopparam)
routeShop.post('/shop',ctrlShop.postShop)
routeShop.put('/shop/:id_brg',ctrlShop.putShop)
routeShop.delete('/shop/:id_brg',ctrlShop.deleteShop)

module.exports = routeShop
