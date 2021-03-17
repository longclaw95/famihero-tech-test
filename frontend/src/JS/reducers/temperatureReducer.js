import {
  GET_TEMPERATURE_FAIL,
  GET_TEMPERATURE_REQUEST,
  GET_TEMPERATURE_SUCCESS,
  CREATE_TEMPERATURE_FAIL,
  CREATE_TEMPERATURE_REQUEST,
  CREATE_TEMPERATURE_SUCCESS,
} from '../constants/temperatureConstants'

export const createTemperatureReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_TEMPERATURE_REQUEST:
      return { loading: true, temperature: {} }

    case CREATE_TEMPERATURE_SUCCESS:
      return { loading: false, temperature: action.payload, success: true }

    case CREATE_TEMPERATURE_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const getTemperatureReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_TEMPERATURE_REQUEST:
      return { loading: true, temperature: {} }

    case GET_TEMPERATURE_SUCCESS:
      return { loading: false, temperature: action.payload, success: true }

    case GET_TEMPERATURE_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
