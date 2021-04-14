const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('testing', 'root', '492356', {
  host: 'localhost',
  dialect: 'mysql'
})

const sync = async () => {
  await sequelize.sync({ alter: true })
}
sync()

module.exports = sequelize
