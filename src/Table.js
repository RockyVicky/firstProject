import React, { Component } from "react";
//import Delete from './Delete';
export default class Table extends Component {


    render() {
        const { raakesh } = this.props;
        return (
            <div>
                <table>
                    <tbody>

                        <tr>
                            <td style={{ color: 'red' }}>
                                Hello gchghgf
                            </td>

                        </tr>
                        {
                            raakesh.map((element, index) =>
                                <>
                                    <tr key={index}>
                                        <td>
                                            {element.firstName}
                                        </td>
                                         <td> 
                                             {element.lastName} <button  onClick={() => this.props.edit(element,index) }>Edit</button>  
                                             <button onClick={() => this.props.delete(element, index)} >Delete</button> 
                                             {/* <Delete handle={()=>this.props.delete(element, index)} />  */}
                                            
                                         </td> 
                                    </tr>
                                </>)
                        }

                    </tbody>
                </table>        
            </div>
        )
    }
}


