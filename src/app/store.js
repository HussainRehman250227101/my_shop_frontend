import { legacy_createStore,combineReducers,applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'

import { productsReducer } from '../reducers/productsReducer'

const middleware = [thunk]
const initialState ={}
const reducer  = combineReducers({
    productsList : productsReducer
})

const store = legacy_createStore(
    reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))


export default store