const mongoose = require('mongoose')

// defining the model schema

const temperatureSchema = mongoose.Schema(
  {
    cityName: {
      type: String,
    },

    data: {
      type: Object,
    },
  },
  {
    timestamps: true,
  }
)

const Temperature = mongoose.model('Temperature', temperatureSchema)

module.exports = Temperature
