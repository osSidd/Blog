import {applyMiddleware, createStore} from 'redux'
import rootReducer from '../reducer/rootReducer'
import example from '../middleware/example'
import example2 from '../middleware/example2'

// const middleware = applyMiddleware(example, example2)

const store = createStore(rootReducer)

export default store