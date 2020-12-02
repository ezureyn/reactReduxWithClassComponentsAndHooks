import * as actiontypes from "../actions/actiontypes";
import {initialState} from "./initialState";



const usersCityReducer=(state=initialState.apiCity,action)=>{

    if (action.type === actiontypes.GETUSERCITY) {
      
      state= action.payload.map((user) => {
        return user.address.city + ", ";
      });
      
      return state
    } else {
      return state;
    }

}

export default usersCityReducer;