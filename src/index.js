import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App'
// import Test from '../src/Test';
// import Delete from './Delete'
import RequisitionFormPdf from './RequisitionFormPdf';
import Slick from './Slickreact';
import ScrollSnap from './ScrollSnap';
import Chart from './ApexChart';
import PieChart from './PieChart';
import BarChart from './BarChart';
import UseEffect from './UseEffect'
import HorizontalBar from './HorizontalBar';
//import Response from './Responsive';
//import App from './App';
//import MaterialUi from './MaterialUi.js'
import Display from './DisplayButton';
//import Hello from './ScrollNpm';
import Scroll from './Scroll'; 
import Swipe from './Swipe';
import reportWebVitals from './reportWebVitals';
//import Form from './Forms';
// import Example from './Hooks';

ReactDOM.render(
  <React.StrictMode>
    <Chart />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
