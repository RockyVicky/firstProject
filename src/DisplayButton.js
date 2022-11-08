import React, { Component } from "react";
//import { Table } from "react-bootstrap";
import Table from "./Table";
// import Delete from './Delete';
//import Moment from "moment";
import Button from 'react-bootstrap/Button';



class DisplayButton extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            data: [{ firstName: 'Raakesh', lastName: 'Ramakrishnan' }, { firstName: 'Raghvan', lastName: 'Ramakrishnan' }],
            firstName: '',
            lastName: '',
            mode: 'submit',
            elementAddress: "",
            test: ''
        };
        // one: false,
        // two: 1,
        // three: 1,
        // value: 'Please write an essay about your favorite DOM element.'


        // this.activateLaser = this.activateLasers.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        // this.Delete = this.Delete.bind(this);
        // this.Edit = this.Edit.bind(this);
    }
    handleChange() {
        // this.setState({ value: event.target.value });
        alert('hitting');

    }
    handleSubmit(mode) {
        //this.setState({test:event.target.value});
        //alert('An Value was submitted: '+event.target.value );
        let { elementAddress } = this.state;
        let obj = {};
        obj.firstName = this.state.firstName;
        obj.lastName = this.state.lastName;
        // let myArray = this.state.data;
        // myArray.push(obj);

        // this.setState({ data: myArray,
        //     firstName: '',
        // lastName: ''});
        //const target = event.target;
        //const value = target.value;

    if(!!this.state.firstName  || !!this.state.lastName){

        if (mode === 'update') {
            let newArray = [...this.state.data];

            newArray[elementAddress].firstName = this.state.firstName;
            newArray[elementAddress].lastName = this.state.lastName;

            this.setState({
                mode: 'submit',
                data: [...newArray],
                firstName: '',
                lastName: ''
            });
        } else {
            this.setState({
                data: [...this.state.data, obj],
                firstName: '',
                lastName: ''
            });
        }
       
    }
    else{
        alert('enter some values');
    }
            //alert('enter some value');
        
        // event.preventDefault();
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    delete(element, index) {
        // alert(w);
        //alert('hjdhd');
        //let one = this.state.data;
        //let two = one.filter;
        //let one = [...this.state.data];
        // one.splice(0,1)
        const trail = this.state.data.filter((a, b) => b !== index);
        // console.log(trail);
        //alert(trail);
        this.setState({ data: [...trail] })
        // this.setState({
        //     data: this.state.data.filter(i,w !==    )
        // });

    }
    edit(item, index) {
        //this.setState({})
        //    alert();
        this.setState({ firstName: item.firstName, lastName: item.lastName, mode: 'update', elementAddress: index });

        //this.state.firstName = one;

    }
    onChangeTextFirst  (event) {
        this.setState({firstName: event.target.value })
        
    }
    onChangeTextLast (event) {
        this.setState({lastName: event.target.value })
    }

    add() {
        let test ={};
        test.firstName = this.state.firstName;
        test.lastName = this.state.lastName;
        this.setState({data:[...this.state.data, test]})
 }

    // show = () => {
    //     // <p>{this.state.two}</p>
    //     // let firstValue = !this.state.one;
    //     // this.setState({one: !this.state.one});
    //     let x = this.state.two;
    //     x++;
    //     this.setState({two: x});

    //}
    // activateLasers() {
    //     this.setState({three: this.state.three+1 })
    // }
    // // renderTime = (data) => {
    // //     return(
    // //         <p>
    // //             {data}
    // //         </p>
    // //     )
    // // }
    render() {
        console.log("***lastName****"+this.state.lastName)
        console.log("***firstName****"+this.state.firstName)
        //const {two} = this.state;
        //const {data} = this.state;
        return (
<div>
            <div style={{ width: '100%', height: '50%', border: '1pt solid red' }}>
                {/* <button onClick={() => this.activateLasers()}>
                  activateLasers

                </button>
                <p>{this.state.three}</p>
                <button onClick={() => this.show()}
                    style={{
                        padding: 5,
                        backgroundColor: 'red',
                        color: '#fff',
                        fontSize: 12,
                        margin: 10
                    }}>
                    CLick
                </button><p>{this.state.two}</p> 
                {this.state.two > 5  && <details>
                    <summary>fghjh</summary>
                    no numbers
                    </details>} */}

                {/* <form onSubmit={this.handleSubmit}>
                        <label>
                        Essay:
                        <textarea></textarea>
                        </label>
                        <input type="submit" value="Submit" />
                    </form> */}

                <form onSubmit={(event) => event.preventDefault()}>
                    <label>
                        FirstName:
                        <input type="text" name='firstName' value={this.state.firstName} onChange={(event) => this.onChangeTextFirst(event)} />
                    </label>
                    <label>
                        LastName:
                        <input type="text" name='lastName' value={this.state.lastName} onChange={(event) => this.onChangeTextLast(event)} />
                    </label>
                    {/* <input type='submit' name= 'click' /> */}
                    <Button onClick={(event) => this.handleSubmit(event, this.state.mode)}>
                        {this.state.mode}
                    </Button>
                    <Button style={{marginLeft: 5}} onClick={(event) => this.add()}>
                        ADD
                    </Button>
                </form>
                 <Table raakesh={this.state.data} edit={(element, index) => this.edit(element, index)} delete={(element, index)=> this.delete(element, index)}/> 
                
                
                
                 {/* <Edit /> */}
                 {/* <button onClick={(event) => this.handleSubmit(event)}>Submit</button> 
                 {
                        
                        this.data.map((element, index)=>
                        <>
                        <p><span>FirstName: </span>{element.firstName}<span>LastName: </span>{element.lastName}</p>
                        
                        </>)
                    }  
                <table>
                    <thead>
                        <tr>
                            <th>FirstName</th>
                            <th>LastName</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>The table body</td>
                            <td>with two columns</td>
                        </tr>
                        {
                            this.state.data.length > 0 && this.state.data.map((element, index) =>
                                <tr key={index}>
                                    <td>{element.firstName}</td>
                                    <td>{element.lastName}</td>
                                    <td><Button type="button" onClick={(event) => this.edit(element, index)}>Edit</Button>     <Button type="button" onClick={() => this.delete(element, index)}>Delete</Button></td>

                                </tr>)
                        }
                    </tbody>
                </table> */}
            </div>
            <div style={{ width: '100%', height: '45vh', border: '1pt solid red', marginTop: 20 }}>
            <div class="sidebar">

            <div class="box1">
                <p> 
                Text is here
                </p>
            </div>

            <div class="box2">
                <p> 
                Text is here 
                </p>
            </div>

            </div>
                 </div>
</div>
        )
    }
}
export default DisplayButton;

