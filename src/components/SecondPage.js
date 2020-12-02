import React from 'react'
import {Container, Row, Button} from "reactstrap"
import "../cssfiles/SecondPage.css"
import {useSelector, useDispatch, shallowEqual} from "react-redux"
import {useEffect, useState} from "react"
import {getDataFromAPIForCity, getDataFromAPIForName, logOut} from "../redux/actions/counteractions"
import {getInitialState} from "../index"




//In this project, state management is being done with redux.
//All files is being managed with redux
//in the other files except SecondPage we have used mapStateToProps and mapDispatchToProps
//Now in this page we will use hooks with redux intead of mapStateToProps and mapDispatchToProps
//In order to implement hooks we import useSelector and useDispatch
//Also with useEffect we will manage lifecyle so we won't write componenDidMount or compoenentDidUpdate



const SecondPage= ({history}) => {

    //now we will create a state just for this SecondPage component and get new cities
    //note that this state is not relevant with state in redux
    //at the begining we will define an empty array in useState as an initial state
    const [newCity, setCity]=useState([])
    const newCities=["İzmir " , "Barcelona ", "Budapest ", "Vienna ", "Madrid ", "Valencia ", "Rhodes "];
    function newCityClick () {
        setCity(newCities)
    }

    

    //shallowequal:
    //In summary shallowequal checks the array in order to prevent unneccessary re-render
    //In general redux store is not permanent, it has its own temproray memory 
    //unless we save our state in to local storage of browser, initialState will not change
    //so we will get the changes form reducers like below:
    const city=useSelector(state=>state.usersCityReducer, shallowEqual);
    const name=useSelector(state=>state.usersNameReducer, shallowEqual );
    //if we don't use redux, only use pure react we can reach the state as below:
    // const city=useSelector(state=>state.state.apiCity, shallowEqual);
    // const name=useSelector(state=>state.apiName, shallowEqual );
    //Because of using redux our states are our reducers.
    
    //Now we will get counter value from  counterReducer and update it with useState to our newCount variable
    //we could do that with using useDispatch and counter actions we wrote before like increment, decrement etc.
    //But this time we will get the state from CounterReducer with useSelector and
    //We will update the state via useState with any value that we will assign into a variable that we will name later as newCount.
    const getCountReducer=useSelector(state=>state.counterReducer);
    const [count, setCount]=useState(15)
    const newCount=100;
    function getNewCount(){
          setCount(newCount);
    }
    


    //Now we will get initialState. We have already imported getInitialState functon from store that exists in index.js
    //We will assign this to a variable and use it in jsx
    const get_init=getInitialState;




    //With useDispatch we will be able to use actions of reducers directly
    const Dispatch = useDispatch();
    

    //When SecondPage mounted useEffect will bring the names
     useEffect(() => {
     Dispatch(getDataFromAPIForName());
     console.log("useeffect");
     },[Dispatch,newCity,getCountReducer])
     //In order to understand useEffect function, pls revise the notes and videos in javascript react folder that exist in the PC
    
    //We will also use dispatch in a button to bring city names from api
    // with wrapping getDataFromAPIForCity with dispatch in the button below

    //In order to prevent page refresh, we will not use direct Link tags
    //We should avoid page refreshing because of state reset.
    //When page refreshes the states from reducers turns back to initial state.
    //We will create function and call history.push function in them 
    //By these function we will implement routing
    const homepageChange=(e)=>{
      e.preventDefault()
     history.push("/")
    }

    
    //Logging out of the second page
    const logOutSecondPage = () => {
      Dispatch(logOut());
    }
  
    
    return (
      <div>
        <Container className="SecondPage-Container">
          <Row className="justify-content-center">
              <h1 className="SecondPage-h1"> {count} {get_init.counterReducer} {getCountReducer} </h1>
          </Row>
          <Row className="justify-content-center">
            <p className="SecondPage-p"> {newCity} </p>
            <p className="SecondPage-p"> {city} </p>
            <p className="SecondPage-p"> {name} </p>
          </Row>
          <div className="SecondPage-Button">
            <Button
              outline
              color="secondary"
              className="SecondPage-Button"
              onClick={(e)=>homepageChange(e)}
            >
              Anasayfa
            </Button>
            <span className="SecondPage-Button-getcity">
              <Button
                outline
                color="success"
                onClick={() => Dispatch(getDataFromAPIForCity())}
              >
                Get City
              </Button>
            </span>
            <span className="SecondPage-Button-newcity">
              <Button outline color="danger" onClick={() => newCityClick()}>
                New City
              </Button>
            </span>
            <span className="SecondPage-Button-newcount">
              <Button outline color="success" onClick={() => getNewCount()}>
                New Count
              </Button>
            </span>
            <span className="SecondPage-Button-newcity">
              <Button outline color="danger" onClick={() => logOutSecondPage()}>
                Log Out
              </Button>
            </span>
          </div>
        </Container>
      </div>
    );
}



export default SecondPage;