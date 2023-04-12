// Import module
const express = require('express')
// deklarasi
const app = express();
const port = 8080;

const routeStudio = require('./routers/StudioRouters.js')
const routeUser = require('./routers/UserRouters.js')
const routeShop = require('./routers/ShopRouters.js')
const routePakckage = require('./routers/PakckageRouters.js')

// accept Send Request Body
app.use(express.json())
app.use(express.urlencoded({'extended': true}))

app.use(routeStudio)
app.use(routeUser)
app.use(routeShop)
app.use(routePakckage)

app.listen(port,()=>{
    console.log(`Server Berjalan pada port ${port}`)
})