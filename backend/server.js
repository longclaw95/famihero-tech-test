const express = require('express')
const connectDB = require('./config/db')
const temperatureRoute = require('./routes/temperatureRoutes')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const dotenv = require('dotenv')

// using env package for env variable

dotenv.config()

const app = express()

app.use(express.json())

// connecting to database
connectDB()

app.get('/', (req, res) => {
  res.send('API is running ...')
})

// calling the temperature route
app.use('/api/temperatures', temperatureRoute)

// app.use(notFound)
// app.use(errorHandler)

const PORT = process.env.PORT || 5000

//  consuming the server
app.listen(
  5000,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
