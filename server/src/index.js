const express = require('express')
const cors = require('cors')

const sequelize = require('../config/db')

const PORT = process.env.PORT ?? 5000
const app = express()

const postsRouter = require('../routes/Post')
const commentsRouter = require('../routes/Comments')

app.use(express.json())
app.use(cors())
app.use('/posts', postsRouter)
app.use('/comments', commentsRouter)

const bootstrap = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
    await app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  } catch (err) {
    console.log(err)
  }
}

bootstrap()
