//Redux
import { combineReducers } from 'redux';

//Reducer
import layoutReducer from './layoutReducer'
import questionsReducer from './questionsReducer'


const reducers = combineReducers({
	lr: layoutReducer,
	qr: questionsReducer,
})


export default reducers;