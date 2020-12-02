import React, { Component } from 'react'
import {connect} from "react-redux"
import { increment_by_two, getUserCity, getDataFromAPIForCity } from '../redux/actions/counteractions'
import {Button} from "reactstrap"
import "../cssfiles/IncreaserByTwo.css"


class IncreaserByTwo extends Component {
    render() {
        return (
          <div>
            <Button color="dark" onClick={()=>this.props.increment_by_two()}>
              2 Arttir
            </Button>
            <span className="city">
              <Button
                className="city-Button"
                color="warning"
                onClick={this.props.getDataFromAPIForCity}
              >
                Get City
              </Button>
            </span>
          </div>
        );
    }
}

const mapDispatchToProps={
    increment_by_two: increment_by_two,
    getUserCity: getUserCity,
    getDataFromAPIForCity: getDataFromAPIForCity
};


export default connect(null,mapDispatchToProps)(IncreaserByTwo)