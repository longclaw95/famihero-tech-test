import axios from 'axios'
import {
  GET_TEMPERATURE_FAIL,
  GET_TEMPERATURE_REQUEST,
  GET_TEMPERATURE_SUCCESS,
  CREATE_TEMPERATURE_FAIL,
  CREATE_TEMPERATURE_REQUEST,
  CREATE_TEMPERATURE_SUCCESS,
} from '../constants/temperatureConstants'

export const createTemperature = (query) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_TEMPERATURE_REQUEST })

    const { data } = await axios.post(`api/temperatures/${query}`)

    dispatch({ type: CREATE_TEMPERATURE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: CREATE_TEMPERATURE_FAIL, payload: error })
  }
}

export const getTemperature = (query) => async (dispatch) => {
  try {
    dispatch({ type: GET_TEMPERATURE_REQUEST })

    const { data } = await axios.get(`api/temperatures/${query}`)

    dispatch({ type: GET_TEMPERATURE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: GET_TEMPERATURE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
