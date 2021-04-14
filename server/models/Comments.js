const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')
const Posts = require('./Posts')

const Comments = sequelize.define('Comments', {
  body: {
    type: DataTypes.STRING,
    allowNull: false,
  }
})

module.exports = Comments
