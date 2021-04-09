const express = require('express')
const { getAllPosts, createPost, getPostById, deletePost, updatePost } = require('../controllers/Posts')

const router = express.Router()

router.get('/', getAllPosts)
router.get('/:id', getPostById)
router.post('/', createPost)
router.delete('/:id', deletePost)
router.put('/:id', updatePost)


module.exports = router
