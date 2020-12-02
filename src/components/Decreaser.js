import React, { Component } from 'react'
import {connect} from "react-redux"
import { decrement} from '../redux/actions/counteractions'
import {Button} from "reactstrap"



class Decreaser extends Component {

    //We could use this.props.decrement action directly in onClick event with writing {this.props.decrement} in it
    //But in order to see different usages we will use it in a function
    handleClick(){
      return  this.props.decrement()
    }

    render() {
        return (
            <div>
                <Button color="danger" 
                onClick={()=>this.handleClick()}
                >1 Azalt</Button>
            </div>
        )
    }
}

const mapDispatchToProps={decrement};


export default connect(null,mapDispatchToProps)(Decreaser)