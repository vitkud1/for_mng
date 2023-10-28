const express = require('express')
const router = express.Router()

const {addKitten, getKittens} = require('../controllers/kitten')

router.post('/', addKitten)
router.get('/', getKittens)

module.exports = router

