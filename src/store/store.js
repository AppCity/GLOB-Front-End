//Redux
import { createStore, applyMiddleware } from 'redux';
import {createWrapper} from 'next-redux-wrapper'; //NEXT Redux Wrapper
import thunk from 'redux-thunk'; //Middleware
// import { composeWithDevTools } from 'redux-devtools-extension'

//Reducer
import reducers from './reducers/reducers'

const bindMiddleware = (middleware) => 
{
    //! Development
    if (process.env.NODE_ENV !== 'production') 
    {
      const { composeWithDevTools } = require('redux-devtools-extension')
      return composeWithDevTools(applyMiddleware(middleware))
    }
    //* Production
    return applyMiddleware(middleware)
}

const ReduxStore = (initialState) => 
{
    const store = createStore(reducers, initialState, bindMiddleware(thunk));
    return store;
};


export const ReduxWrapper = createWrapper(ReduxStore) ; 