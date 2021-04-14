const Comments = require('../models/Comments')

exports.getComments = async (req, res) => {
  const postId = req.params.postId
  try {
    const comments = await Comments.findAll({
      where: {
        PostId: postId
      }
    })
    res.status(200).json({ success: true, comments })
  } catch (e) {
    console.log(e)
  }
}

exports.createComment = async (req, res) => {
  const comment = req.body
  try {
    const newComment = await Comments.create(comment)
    res.status(200).json({ success: true, comment: newComment })
  } catch (e) {
    console.log(e)
  }
}
