const express = require('express')
const router = express.Router()


const homePageRoute = router.get('/', (request, response) => {
    response.json({
        message: 'this is my homePage, nothing of important things here'
    })
})

module.exports = {
    homePageRoute
}