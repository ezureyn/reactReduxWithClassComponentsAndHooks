import React, { Component } from 'react'
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "../cssfiles/LogInPage.css";
import {Button, Container, Row} from "reactstrap";
import {logIn} from "../redux/actions/counteractions";


class LogInPage extends Component {

    changeRoute = () => {

      setTimeout(() => {
        if(this.props.isLogged===true)
      {this.props.history.push("/secondpage")}
      }, 5000);
      
  }
  
  componentDidMount(){
    this.changeRoute();
  }
    
    render() {
      console.log(this.props);
        return (
          <div id="loginpage-div" className="imagepage-main-div">
            <Container className="loginpage-container justify-content-center">
              <Row>
                <h3>Please Log-in</h3>
              </Row>
              <Row>
              <h3> {this.props.isLogged ? "you are logged in ..redirecting to secondpage" : "you are logged out"} </h3>
              </Row>
              <Row>
                <Button color="success" onClick={this.props.logIn}>Log-in</Button>
              </Row>
            </Container>
          </div>
        );
    }
}

const mapDispatchToProps={logIn: logIn};

const mapStateToProps = (state) => {
  return { 
           isLogged: state.loginReducer
}
}

export default connect(mapStateToProps,mapDispatchToProps)(LogInPage)