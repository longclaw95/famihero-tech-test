import React, { useState, useEffect } from 'react'
import { Form, Button, Container, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  createTemperature,
  getTemperature,
} from './JS/actions/temperatureAction'

function App() {
  const [query, setQuery] = useState('')

  const dispatch = useDispatch()

  const createdTemperature = useSelector((state) => state.createdTemperature)
  const temperatureDetails = useSelector((state) => state.temperatureDetails)
  const { success: successCreationTemperature } = createdTemperature
  const {
    success: successFetchingTemperature,
    temperature: temperature,
    error: errorFetchingTemerature,
  } = temperatureDetails

  const capitalize = (string) => {
    return string.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
      letter.toUpperCase()
    )
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(createTemperature(query))
  }

  useEffect(() => {
    if (successCreationTemperature) {
      dispatch(getTemperature(capitalize(query)))
    }
  }, [dispatch, successCreationTemperature])

  return (
    <div>
      <Container className='text-center'>
        <Card style={{ height: '18rem' }}>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='cityName'>
              <Form.Label>City Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter city name'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button type='submit' variant='primary'>
              submit
            </Button>
          </Form>
          <Card.Body>
            {}
            {successFetchingTemperature ? (
              <div>
                <div>
                  <div>
                    Date : {temperature.createdAt.substring(0, 10)}
                    <br></br>
                    Time : {temperature.createdAt.substring(11, 16)} <br></br>
                  </div>
                  <div>
                    {temperature.data.name}, {temperature.data.sys.country}
                  </div>
                  {/* <div className='date'>{dateBuilder(new Date())}</div> */}
                </div>
                <div>
                  <div>{Math.round(temperature.data.main.temp)}°c</div>
                  <div>{temperature.data.weather[0].main}</div>
                </div>
              </div>
            ) : (
              ''
            )}
            {errorFetchingTemerature ? 'city not found' : ''}
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default App
