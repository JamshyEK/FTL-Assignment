import {combineReducers} from 'redux'
import UserReducer from './Users/UserReducer'


const rootReducer=combineReducers({
   
   user:UserReducer,
})

export default rootReducer