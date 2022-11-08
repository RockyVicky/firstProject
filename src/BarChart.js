import ReactApexChart from "react-apexcharts";
import React from "react";


export default class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
       
        
        series: [ 
            {
          name: 'PRODUCT A',
          data: [44, 55, 41, 67, 22, 43]
        }, {
        //   name: 'PRODUCT B',
          data: [13, 23, 20, 8, 13, 27]
        }, {
        //   name: 'PRODUCT C',
          data: [11, 17, 15, 15, 21, 14]
        }, {
        //   name: 'PRODUCT D',
          data: [21, 7, 25, 13, 22, 8]
        }],
        options: {
            grid: {
                show: false,
              },
              legend: {
                show: false,
              },
            xaxis: {
                show: false,
                axisTicks: {
                    show: false,
                  },
                axisBorder: {
                    show: false,
                  },
                labels: {
                  show: false,
                },
                
              },
              yaxis: {
                show: false,
                labels: {
                  show: false,
                },
                axisBorder: {
                  show: false,
                },
                axisTicks: {
                  show: false,
                },
                crosshairs: {
                  show: false,
                },
                tooltip: {
                  enabled: false,
                },
               
              },
          chart: {
            
            type: 'bar',
            height: 150,
            stacked: true,
            toolbar: {
              show: false
            },
            zoom: {
              enabled: true
            }
          },
          responsive: [{
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
              }
            }
          }],
          plotOptions: {
            bar: {
              horizontal: false,
              borderRadius: 5
            },
          },
          
          legend: {
            position: 'right',
            offsetY: 40
          },
          fill: {
            opacity: 1,
            
          },
          
        },
      
      
      };
    }

  

    render() {
      return (
        

  <div id="chart" style={{backgroundColor: "#56D8FF"}}>
<ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
</div>


      );
    }
  }