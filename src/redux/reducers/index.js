import {combineReducers} from "redux"
import counterReducer from "./counterReducer"
import usersNameReducer from "./usersNameReducer"
import usersCityReducer from "./usersCityReducer"
import loginReducer from "./loginReducer"

const allReducers=combineReducers(
    {
        usersNameReducer: usersNameReducer,
        counterReducer: counterReducer,
        usersCityReducer: usersCityReducer,
        loginReducer: loginReducer
        
    }
)

export default allReducers;