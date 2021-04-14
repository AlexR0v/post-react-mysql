const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')
const Comments = require('./Comments')

const Posts = sequelize.define('Posts', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  postText: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  }
})

Posts.hasMany(Comments, { onDelete: 'cascade' })
Comments.belongsTo(Posts, { foreignKey: 'PostId' })

module.exports = Posts
