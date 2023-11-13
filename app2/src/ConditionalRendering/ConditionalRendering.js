import React, { Component } from 'react';
import HomePage from './HomePage';
import LoginPage from './LoginPage'

export default class ConditionalRendering extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLogedIn:false
      }
    }
    


  render() {
    return( this.state.isLogedIn ? <HomePage/> :<LoginPage />);
  }
}
