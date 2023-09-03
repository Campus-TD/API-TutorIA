const express = require('express')
const router = express.Router()

router.use(require('./controller/GpsController'))

module.exports = router