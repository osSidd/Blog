import {applyMiddleware, createStore} from 'redux'
import rootReducer from '../reducer/rootReducer'
// import {thunkMiddleware} from 'redux-thunk'

const thunkMiddleware = storeApi => next => action => {
    if(typeof action === 'function')
        return action(storeApi.dispatch, storeApi.getState)
    return next(action)
}

const composedEnhancer = applyMiddleware(thunkMiddleware)

const store = createStore(rootReducer, composedEnhancer)

export default store