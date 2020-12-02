import React, { Component } from 'react'
import {connect} from "react-redux"
import { increment } from '../redux/actions/counteractions'
import {Button} from "reactstrap"

class Increaser extends Component {

    render() {
        return (
            <div>
                <Button color="success" 
                onClick={(e)=>this.props.increment(parseInt(10))}
                >10 Arttir</Button>
            </div>
        )
    }
}

const mapDispatchToProps={increment:increment};


export default connect(null,mapDispatchToProps)(Increaser)