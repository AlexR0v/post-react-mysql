const { Posts } = require('../models')

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Posts.findAll()
    res.status(200).json({ success: true, posts: posts })
  } catch (e) {
    console.log(e)
  }
}


exports.createPost = async (req, res) => {
  const post = req.body
  try {
    const newPost = await Posts.create(post)
    res.status(200).json({ success: true, post: newPost })
  } catch (e) {
    console.log(e)
  }
}

exports.getPostById = async (req, res) => {
  const id = req.params.id
  try {
    const post = await Posts.findOne({
      where: {
        id: id
      }
    })
    res.status(200).json({ success: true, post: post })
  } catch (e) {
    console.log(e)
  }
}

exports.deletePost = async (req, res) => {
  const id = req.params.id
  try {
    const post = await Posts.destroy({
      where: {
        id: id
      }
    })
    res.status(200).json({ success: true, post: post })
  } catch (e) {
    console.log(e)
  }
}

exports.updatePost = async (req, res) => {
  const post = req.body
  const id = req.params.id
  try {
    await Posts.update(post, {
      where: {
        id: id
      }
    })
    const updatePost = await Posts.findOne({
      where: {
        id: id
      }
    })
    await res.status(200).json({ success: true, post: updatePost })
  } catch (e) {
    console.log(e)
  }
}
