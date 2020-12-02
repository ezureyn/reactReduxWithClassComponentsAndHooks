import * as actiontypes from "../actions/actiontypes";
import {initialState} from "./initialState";



const usersNameReducer=(state=initialState.apiName,action)=>{

    if(action.type===actiontypes.GETDATA){
            state=action.payload;
          
              return state.map((user) => {
                
                return user.name + ", ";
              });
    }
    else{
        return state
    }

}

export default usersNameReducer;