const express = require('express')
const routes = require('./routes/routes')
const app = express()

app.use(routes.homePageRoute)

app.listen(3001, () => {
    console.log('backend running in http://localhost:3001')
})