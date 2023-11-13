import React, { Component } from 'react'

export default class eventHandlerBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
      //this.handleClick=this.handleClick.bind(this); //if we use es6 arrow funtion we don't need binding
    }

     handleClick(){             //if we use es6 arrow funtion we don't need binding
        this.setState(
            {
                count: this.state.count+1
            }
        );
    }


    
  render() {
    return (
      <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.handleClick.bind(this)}>Increase</button> 
      </div>
    )
  }
}
