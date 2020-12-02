import * as actiontypes from "../actions/actiontypes"
import {initialState} from "./initialState";




const counterReducer=(state=initialState.amount,action)=>{

    let newstate=state;

    switch(action.type){

        case actiontypes.INCREASE:
            return (newstate=newstate+action.payload);
        case actiontypes.DECREASE:
            return (newstate=newstate-action.payload);
        case actiontypes.INCREASE_BY_TWO:
            return (newstate=newstate+action.payload);
        default:
            return state;

    }

}


export default counterReducer;