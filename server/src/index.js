const express = require('express')
const cors = require('cors')

const PORT = process.env.PORT ?? 5000
const app = express()

const db = require('../models')
const postsRouter = require('../routes/Post')

app.use(express.json())
app.use(cors())
app.use('/posts', postsRouter)

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
})
