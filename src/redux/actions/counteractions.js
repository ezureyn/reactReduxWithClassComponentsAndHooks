import * as actiontypes from "./actiontypes"
import axios from "axios"


export const increment=(x)=>{
    return {
        type:actiontypes.INCREASE,
        payload:x
    }
}

export const decrement=()=>{
    return {
        type:actiontypes.DECREASE,
        payload:1
    }
}

export const increment_by_two=()=>{
    return {
        type:actiontypes.INCREASE_BY_TWO,
        payload:2
    }
}

export const getData=(data)=>{
    return {
        type: actiontypes.GETDATA,
        payload: data
    }
}



export const getDataFromAPIForName=()=>{
    return async function (dispatch){
           
            const url="https://jsonplaceholder.typicode.com/users";
            const response= await axios.get(url);
            const result=response.data;
            console.log(result)
            return dispatch(getData(result))
        }
    
}

export const getUserCity=(data)=>{
    return {
        type: actiontypes.GETUSERCITY,
        payload: data
    }
}

export const getDataFromAPIForCity=()=>{
    return async function (dispatch){
           
            const url="https://jsonplaceholder.typicode.com/users";
            const response= await axios.get(url);
            const result=response.data;
            console.log(result)
            return dispatch(getUserCity(result))
        }
    
}

export const logIn=()=>{
    return {
        type: actiontypes.LOGIN,
        payload: true
    }
}

export const logOut=()=>{
    return {
        type: actiontypes.LOGOUT,
        payload: false
    }
}

