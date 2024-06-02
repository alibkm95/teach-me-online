require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()
const path = require('path')

const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')

const connectDB = require('./db/connect')

// ! => routers
const authRouter = require('./routes/authRoutes')
const userRouter = require('./routes/usersRoutes')

const notFoundMiddleware = require('./middlewares/notFound')
const errorHandlerMiddleware = require('./middlewares/errorHandler')

app.use(express.json())
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(express.static(path.join(__dirname, './public')))
app.use(fileUpload())

// ! => routes
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)

// ! => err midelwares
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`server running on port: ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()