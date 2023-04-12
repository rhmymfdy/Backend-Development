const express = require('express')
const routeStudio = express.Router()

// import modul 
const ctrlStudio = require('../controller/ctrlstudio')

// Get Data & post data In studio
routeStudio.get('/studio',ctrlStudio.getStudio)

routeStudio.get('/studio/:id',ctrlStudio.getStudioparam)

routeStudio.post('/studio',ctrlStudio.postStudio)

routeStudio.put('/studio/:id',ctrlStudio.putStudio)

routeStudio.delete('/studio/:id',ctrlStudio.deleteStudio)

module.exports = routeStudio
