const express = require('express')
const router = express.Router()

const db = require('../models/index')
const controller = require('../controllers/pessoas')

router.get('/', controller.index.bind(null, db.models))
router.get('/create', controller.createForm)
router.post('/create', controller.createProcess.bind(null, db.models))
router.get('/delete/:id', controller.deleteOne.bind(null, db.models))

router.get('/edit/:id', controller.editForm.bind(null, db.models))
router.post('/edit/:id', controller.editProcess.bind(null, db.models))

module.exports = router
