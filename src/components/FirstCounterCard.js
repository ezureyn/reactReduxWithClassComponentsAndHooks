import React, { Component } from 'react';
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import ata from "../images/Atatürk.jpg";
import "../cssfiles/FirstCounterCard.css"



class FirstCounterCard extends Component {
    render() {
        return (
          <div>
            <Card className=".card" style={{ width: "20rem" , heigth:"25rem"}}>
              <CardImg
                top
                width="100%"
                src={ata}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle className="cardtitle">Amount</CardTitle>
                <CardSubtitle className="cardsubtitle">{this.props.counter}</CardSubtitle>
                <CardText className="cardtext">
                  Mustafa Kemal ATATÜRK
                </CardText>
              </CardBody>
            </Card>
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { counter: state.counterReducer,}
  }


export default connect(mapStateToProps, null)(FirstCounterCard)