//Redux
import { combineReducers } from 'redux';

//Reducer
import layoutReducer from './layoutReducer'


const reducers = combineReducers({
	lr: layoutReducer,
})


export default reducers;