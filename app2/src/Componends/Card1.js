import React, { Component } from "react";  
     
// Need export Component
//Must need extends Component
// All return must be in render method And need  this keyword to use props in class component 

class App extends Component{                     

    render(){   
        return(
            <div>

        <h1>{this.props.titleText}</h1>       
        <p>{this.props.desc}</p>

        </div>

        )

    }

}

export default App;