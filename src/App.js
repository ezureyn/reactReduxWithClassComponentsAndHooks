import React, { Component } from "react";
import Counter from "./components/Counter";
import Increaser from './components/Increaser';
import Decreaser from './components/Decreaser';
import IncreaserByTwo from './components/IncreaserByTwo';
import "bootstrap/dist/css/bootstrap.min.css";
import {Container,Row,Col} from "reactstrap";
import "../src/cssfiles/App.css";
import "../src/cssfiles/Counter.css";
import {Route,Switch, Redirect} from "react-router-dom";
import SecondPage from './components/SecondPage';
import Navi from './components/Navi';
import FirstCounterCard from "./components/FirstCounterCard";
import { connect } from "react-redux";
import LogInPage from "./components/LogInPage"
import { createBrowserHistory } from "history";


//we will create a browser history for page routing and this will prevent the page refresh during routing
//This history must be a global variable so we create it outside of the App component
//Then we will pass this history variable to tag of the main div in App
//We should avoid page refreshing because of state reset.
//When page refreshes the states from reducers turns back to initial state.
const history = createBrowserHistory();

class App extends Component {

  render(){
  return (
    <div className="App" history={history}>
      <Navi/>
      <Container className="App-Container" >
        <Switch>
          <Route
          exact
            path="/"
            render={(routeProps) => (
              <div className="App-div">
                <Row className="Counter-Row justify-content-center">
                  <Col className=".col-4 .col-sm-4 justify-content-center">
                    <FirstCounterCard className="FirstCounterCard" />
                  </Col>
                  <Col className=".col-8 .col-sm-4 justify-content-center">
                    <Counter className="App-Counter justify-content-center" />
                    <Row className="Buttons-Row justify-content-center">
                  <Increaser />
                  <span className="App-Decreaser">
                    <Decreaser />
                  </span>
                  <span className="App-IncreaserByTwo">
                    <IncreaserByTwo />
                  </span>
                </Row>
                  </Col>
                </Row>
              </div>
            )}
          ></Route>
         <Route path="/secondpage" className="App-SecondPage" render={(routeProps)=>(
            this.props.isLogged ? (<SecondPage {...routeProps} />) : (<Redirect {...routeProps} to="/loginpage" />)
          )} />
          <Route exact path="/loginpage" component={LogInPage}/>
        </Switch>
      </Container>
    </div>
  );
 }
}

const mapStateToProps = (state) => {
  return { 
           isLogged: state.loginReducer
}
}

export default connect(mapStateToProps, null)(App)
