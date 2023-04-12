const express = require('express')
const routePakckage = express.Router()
const ctrlPakckage = require('../controller/ctrlPackage')

// Get Data & post data In user
routePakckage.get('/pakckage',ctrlPakckage.getPakckage)
routePakckage.get('/pakckage/:id_package',ctrlPakckage.getPakckageparam)
routePakckage.post('/pakckage',ctrlPakckage.postPakckage)
routePakckage.put('/pakckage/:id_package',ctrlPakckage.putPakckage)
routePakckage.delete('/pakckage/:id_package',ctrlPakckage.deletePakckage)

module.exports = routePakckage
