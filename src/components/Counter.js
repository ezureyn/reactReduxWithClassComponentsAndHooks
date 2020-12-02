import React, { Component } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row } from "reactstrap";
import {getDataFromAPIForName} from "../redux/actions/counteractions";




class Counter extends Component {

  

componentDidMount(){
      this.props.getDataFromAPIForName();
}




  render() {
    return (
      <div className="Counter">
        <Row className="Counter-h1-Row justify-content-center">
          <h1 className="Counter-h1">Miktari arttir.</h1>
        </Row>
        <Row className="Counter-h2-Row justify-content-center">
          <h2>{this.props.counter}</h2>
        </Row>
        <Row className="Counter-h3-Row justify-content-center">
          <h4>{this.props.city}</h4>
        </Row>
        <Row>
          <h4 className="Counter-h4-Row justify-content-center">
            {this.props.name}
          </h4>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { counter: state.counterReducer,
           name: state.usersNameReducer,
           city: state.usersCityReducer
}
}


const mapDispatchToProps={
   getDataFromAPIForName: getDataFromAPIForName
}



export default connect(mapStateToProps, mapDispatchToProps)(Counter)
