import React, { Component } from "react";
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Container';
// import p from 'react-bootstrap/p';
//mport Col from 'react-bootstrap/Col';

export default class Scroll extends Component {
    constructor(props) {
        super(props);
        // create a ref to store the textInput DOM element
        this.Award = React.createRef();
        this.Nominee = React.createRef();
        this.Nominator = React.createRef();
        this.Votes = React.createRef();
    }
    handleScroll(event) {
        // let name = event.target.name;
        // Explicitly focus the text input using the raw DOM API
        // Note: we're accessing "current" to get the DOM node
        this[event.target.name].current.scrollIntoView(true);
        // switch (name) {
        //     case "Award":
        //         this.Award.current.scrollIntoView(true);
        //         break;
        //     case "Nominee":
        //         this.Nominee.current.scrollIntoView(true);
        //         break;
        //     case "Nominator":
        //         this.Nominator.current.scrollIntoView(true);
        //         break;
        //     case "Votes":
        //         this.Votes.current.scrollIntoView(true);
        //         break;
        //     default:
        //         return null
        // }
    }

    render() {
        return (
            <div className="scroll">
                <div style={{ width: '1vw', height: '20vh',  position: 'fixed',top: "35%", display: "flex", flexDirection: "column", justifyContent: "space-around", left: "2%"  }}>
                    <button style={{borderRadius: "60%", marginBottom: "10%", padding: "35%"}} name="Award" onClick={(event) => this.handleScroll(event)}></button>
                    <button style={{borderRadius: "60%",  marginBottom: "10%", padding: "35%"}} name="Nominee" onClick={(event) => this.handleScroll(event)}></button>
                    <button style={{borderRadius: "60%",  marginBottom: "10%", padding: "35%"}} name="Nominator" onClick={(event) => this.handleScroll(event)}></button>
                    <button style={{borderRadius: "60%",  marginBottom: "10%", padding: "35%"}} name="Votes" onClick={(event) => this.handleScroll(event)}></button>
                    
                </div>
                <div>
                    
                </div>
                   
               
                {/* <Navbar bg="dark" variant="dark">
                        <Container>

                            <Nav>
                                <Navbar.Brand href="#home">Awards</Navbar.Brand>
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                                <Nav.Link href="#Nominee">Nominee</Nav.Link>
                                <Nav.Link href="#Nominator">Nominator</Nav.Link>
                                <Nav.Link href="#Votes">Votes</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar> */}


                {/* <div style={{display:"flex", justifyContent:"center", alignContent: "center",  border: '2px solid red', marginTop: '20px' }}>
                        <div>
                            
                            <p></p>
                        </div>
                            <div style={{ overflow: "scroll", border: '2px solid green', width: '25vw', height: '400px' }}>
                                <p href="#home">
                                    ggttt
                                </p>
                                <p>dddfdfdfdfdf</p>
                                <p>fd</p>
                                <p>fdf</p>
                                <p>defaultdfd</p>
                                <p>fdfdf</p>
                                <p>defaultdfddf</p>
                                <p> defaultdfddff</p>
                                <p> f</p>
                                <p>fdfdff</p>
                                <p>fdfdff</p>
                                <p>fdfdff</p>
                                <p>fdfdff</p>
                                <p>fdfdff</p>
                                <p>fdfdf</p>
                                <p>fdfdf</p>
                                <p>fdfdf</p>
                                <p> fdfdf</p>
                                <p> fdfdf</p>
                                <p> fdfdf</p>
                                <p> fdfdf</p>
                                <p> 2222</p>
                                <p> wwww</p>
                                <p> wwww</p>

                            </div>

                        </div>*/}
                <div ref={this.Award} style={{ width: '100vw', height: '600px', backgroundColor: 'green' }}>
                    <p> Award </p>
                </div>
                <div ref={this.Nominator} style={{ width: '100vw', height: '600px', backgroundColor: 'yellow' }}>
                    <p> Nominator </p>
                </div>
                <div ref={this.Nominee} style={{ width: '100vw', height: '600px', backgroundColor: 'blue' }}>
                    <p> Nominee </p>
                </div>
                <div ref={this.Votes} style={{ width: '100vw', height: '600px', backgroundColor: 'orange' }}>
                    <p> Votes </p>
                </div>
            </div>
            

        )
    }



}
