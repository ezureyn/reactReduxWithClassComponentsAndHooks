import * as actiontypes from "../actions/actiontypes";
import {initialState} from "./initialState";

const loginReducer= (state=initialState.isLoggedIn,action) => {

            if(action.type===actiontypes.LOGIN){
             state=action.payload;
             return state;
            }
            else if(action.type===actiontypes.LOGOUT){
                state=action.payload;
                return state;
            }
            else{
                return state;
            }
          
}


export default loginReducer;