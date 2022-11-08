import React, {Component} from 'react';




export default class NameForm extends Component {
    
    
  
   
  
    render() {
      return (
        <div><button onClick={() => this.props.handle()}>Delete</button> </div>
      );
    }
  }