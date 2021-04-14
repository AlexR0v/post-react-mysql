const express = require('express')
const { getComments, createComment } = require('../controllers/Comments')

const router = express.Router()

router.get('/:postId', getComments)
router.post('/', createComment)

module.exports = router
