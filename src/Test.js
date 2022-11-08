import React, { Component } from 'react';
//import Button from 'react-bootstrap/Button';
//import {Row, Col} from 'react-bootstrap';
// import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
//import Carousel.Item from 'react-bootstrap/Carousel.Item';



export default class Test extends Component {

    render() {
        return (
            <div>
                <p> Hello</p>
                {/* <Row className="mx-0">
                    <Button as={Col} variant="primary">Button #1</Button>
                    <Button as={Col} variant="secondary" className="mx-2">Button #2</Button>
                    <Button as={Col} variant="success">Button #3</Button>
                </Row> */}

<Carousel variant = "dark"  style={{border: "solid red", width: "50vw", height: "50vh"}}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= "https://image.shutterstock.com/image-photo/large-thick-industrial-black-metal-600w-1081708619.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src = "https://image.shutterstock.com/image-photo/large-thick-industrial-black-metal-600w-1081708619.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
        )
    }
}