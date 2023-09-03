const express = require('express')
const router = express.Router()

router.use(require('./controller/Prompts'))

module.exports = router