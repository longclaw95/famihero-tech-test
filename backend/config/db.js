const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    console.log(`mongoose is connected on ${connect.connection.host}`)
  } catch (err) {
    console.log(err)
  }
}

module.exports = connectDB
