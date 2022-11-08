import React, { Component } from "react";
import MyTable from "./Table";
import Button from '@mui/material/Button';


export default class Forms extends Component{
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            data: [{ firstName: 'Raakesh', lastName: 'Ramakrishnan' }, 
            { firstName: 'Raghvan', lastName: 'Ramakrishnan' }],
            test: [{}]
          

        };
        //this.one = this.one.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this); 
              
    }
    one(e)  {

        this.setState({firstName: e.target.value});
        

    }
    handleSubmit(k) {
        alert('A name was submitted: ' + this.state.firstName);
        k.preventDefault();
    }
    
    render() {
        
        return(
            <div>
                <Button variant="contained">Hello World</Button>;
                <form onSubmit={(k) => this.handleSubmit(k)}>
                <label>
                    Name: 
                    <input type='text' value={this.state.firstName}  onChange={(e) => this.one(e)} />
                </label>
                <input type='submit' name='kani' />
                
                </form>
                {/* <p>{this.state.firstName}</p> */}
                <MyTable  raakesh={this.state.data}/>
            </div>
        );
    }
}
