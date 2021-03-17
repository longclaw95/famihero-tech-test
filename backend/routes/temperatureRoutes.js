const express = require('express')
const Temperature = require('../models/temperatureModel')
const fetch = require('node-fetch')
const router = express.Router()

// defining the PATH and key taken from openweathermap API
const api = {
  key: '5478fb880232bae8e6085ccc6e7ca403',
  base: 'https://api.openweathermap.org/data/2.5/',
}

// recovering the data from the external API

const getInput = async (query) => {
  return await fetch(
    `${api.base}weather?q=${query}&units=metric&APPID=${api.key}`
  ).then((res) => res.json())
}

// @desc    saving the data recovered by the openweathermap api in the DB
// @route   POST /api/temperature/cityName
// @access  Public
router.post('/:cityName', async (req, res) => {
  const cityName = req.params.cityName
  const data = await getInput(cityName)

  const temperature = new Temperature({ ...req.body, data })

  const createdTemperature = await temperature.save()
  res.status(201).send(createdTemperature)
})

// @desc    fetching the data from our DB by introducing the city Name
// @route   GET /api/temperature/cityName
// @access  Public

router.get('/:cityName', async (req, res) => {
  const cityName = req.params.cityName
  const temperature = await Temperature.findOne({
    'data.name': cityName,
  }).sort({ createdAt: -1 })
  if (temperature) {
    res.status(201).json(temperature)
  } else {
    res.status(404)
    res.send('city not found')
  }
})

module.exports = router
