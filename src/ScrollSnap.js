// import React, { Component } from "react";



// export default class DisplayButton extends Component {
    
   

//     render () {
//         return(
            
// {/* <div style={{paddingTop: "50px"}} >


// <div  class="container y mandatory-scroll-snapping">
//   <div>Y Prox. RTL</div>
//   <div>2</div>
//   <div>3</div>
//   <div>4</div>
//   <div>5</div>
// </div>
// </div> */}


            
//         )
//     }
// }


//=========================

import React, {Component} from 'react'
// import ReactDOM from 'react-dom'
import createScrollSnap from 'scroll-snap'
// import './styles.css'

export default class Snap  extends Component {
  container = React.createRef()

  bindScrollSnap() {
    const element = this.container.current
    createScrollSnap(element, {
      snapDestinationY: '90%',
    }, () => console.log('snapped'))
  }

  componentDidMount() {
    this.bindScrollSnap()
  }

  render() {
    return (
      <div id="container" ref={this.container}>
        <div className="page first-page">
          <div>I</div>
          <div className="hint">scroll down</div>
        </div>
        <div className="page second-page">
          <div>II</div>
        </div>
        <div className="page third-page">
          <div>III</div>
        </div>
        <div className="page fourth-page">
          <div>IV</div>
          <div className="hint">scroll up</div>
        </div>
      </div>
    )
  }
}

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)

