import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  getTemperatureReducer,
  createTemperatureReducer,
} from '../reducers/temperatureReducer'

const middleware = [thunk]

const reducer = combineReducers({
  temperatureDetails: getTemperatureReducer,
  createdTemperature: createTemperatureReducer,
})
const initialState = {}
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
