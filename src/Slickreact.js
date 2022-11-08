import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RightArrow from "./images/next-icon.png";
import LeftArrow from "./images/prev-icon.png";
import {DialogContent, DialogTitle, Grid, Typography, Table, TableHead, TableCell, TableRow } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
// import Slider from "react-slick";
// import SliderWrapper from "./styles";








export default class CustomArrows extends Component {
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      // dots: true,
      speed: 500,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      // arrows: true,
      vertical: false,
      dotsClass: "slick-dots slick-thumb",
      swipeToSlide: true,
      fade: false
     
      
      
    };
    

    // dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    return (

//       <div style={{border: "2px solid green", width: "100vw", height: "100vh",}}>
     


//  <Dialog fullScreen open={true} style={{border: "4px solid orange" , height: "100vh", width: "100vw"}}>
   
// <DialogContent>
// <DialogTitle style={{textAlign: "center"}}>
//    Edit
//  </DialogTitle>
//         <Grid container spacing={2}   >
       
//      <Grid item xs={12} style={{border: "2px solid green"}} >
//             <Typography style={{ border:"2px solid orange", backgroundColor: "pink"}}>Crud</Typography>
//           </Grid>
//           <Grid item xs={12} sm={6} md={3} lg={4} xl={4} style={{border: "2px solid red"}}>
//               <Grid container justifyContent={"center"} >
//                 <Grid item xs={5} style={{backgroundColor: "yellow"}}>
//                     <Typography >FirstName: </Typography>
//                 </Grid>
//                 <Grid item xs={7} >
//                     <TextField fullWidth style={{backgroundColor: "yellow"}}> </TextField>
//                 </Grid>
                
                
                
//               </Grid>
//           </Grid>
//           {/* <Grid item xs={8}  style={{border: "2px solid red"}}>
//           <Table>
//                 <TableHead>
//                   <TableRow>
//                     <TableCell> S.No </TableCell>
//                     <TableCell> FirstName </TableCell>
//                     <TableCell> LastName </TableCell>
//                     <TableCell> Age </TableCell>
//                     <TableCell> Action </TableCell>
//                     <TableCell> Delete </TableCell>
//                   </TableRow>
//                 </TableHead>
//                 </Table>
//           </Grid> */}
//         </Grid>
//         </DialogContent>
//  </Dialog>
 
//  </div>
<div>
      {/* <div style={{width: '70%', height: '70%', marginTop: '0px', justifyContent: 'center',alignItems: 'center' }}>


        <h2>Custom Arrows</h2>
        <Slider {...settings}>
          <div>
            <h3 style={{}}><iframe style={{width:"500px",height:"250px"}} src="https://www.youtube.com/embed/nfjGP8rGh6U" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></h3>
          </div>
          <div>
            <h3 style={{}}><iframe style={{width:"500px",height:"250px"}} src="https://www.youtube.com/embed/lYQcEKhSMOc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></h3>
          </div>
          <div>
            <h3 style={{}}><iframe style={{width:"500px",height:"250px"}} src="https://www.youtube.com/embed/NyFv5pMvAQU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></h3>
          </div>
          <div>
            <h3 style={{}}><iframe style={{width:"500px",height:"250px"}} src="https://www.youtube.com/embed/K4dpIWsPqT8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></h3>
          </div>
          <div>
            <h3 style={{}}><iframe style={{width:"500px",height:"250px"}} src="https://www.youtube.com/embed/CcXXx3jUId8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></h3>
          </div>
          <div>
            <h3 style={{backgroundColor: '#5F9EA0', marginRight: '10px'}}>6</h3>
          </div>
        </Slider>

      </div> */}
      <Grid container style={{ display: 'flex', flexDirection: "row", height: '100vh', width: '100vw', justifyContent: 'center', alignItems: 'center', border: '2px solid red' }}>
        {/* <Grid item xs={4} style={{ display: 'flex', flexDirection: "row", justifyContent: 'center', alignItems: 'center', border: '2px solid red' }}> */}
          {/* <div
            onClick={() => this.previous()}
            // className={className}
            style={{ height: '35vh', backgroundColor: "red", display: "flex", flexDirection: "row", justifyContent: 'center', alignItems: 'center', }}


          > */}
            {/* <img src={LeftArrow} alt='' /> */}
          {/* </div> */}
          <Grid xs={10} style={{ display: "flex", height: '55vh', width: '55vw', paddingBottom: "10%",  }}>
          
            <Slider  {...settings} ref={c => (this.slider = c)} style={{ height: '35vh', width: '100%', border: "2px solid green", backgroundColor: "white" }}>
              <Grid item xs={12} style={{backgroundColor: "black", border: "2px solid red"}}>
                NHepp;jdfslj
                {/* <iframe style={{ height: '25vh', width: '35vw', }} src="https://www.youtube.com/embed/nfjGP8rGh6U" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
              </Grid>
              <div>
                <iframe style={{ height: '25vh', width: '35vw', }} src="https://www.youtube.com/embed/lYQcEKhSMOc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div>
                <iframe style={{ height: '25vh', width: '35vw', }} src="https://www.youtube.com/embed/NyFv5pMvAQU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div>
                <iframe style={{ height: '25vh', width: '35vw', }} src="https://www.youtube.com/embed/K4dpIWsPqT8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div>
                <iframe style={{ height: '25vh', width: '35vw', }} src="https://www.youtube.com/embed/CcXXx3jUId8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              {/* <div>
            <h3 style={{backgroundColor: '#5F9EA0', marginRight: '10px'}}>6</h3>
          </div> */}
            </Slider>
          
          </Grid>
          {/* <div
            onClick={() => this.next()}
            style={{ height: '35vh', backgroundColor: "red", display: "flex", flexDirection: "row", justifyContent: 'center', alignItems: 'center', }}

          >
            <img src={RightArrow} alt='' />
          </div> */}
        {/* </Grid> */}
      </Grid>
      </div>
    );
  }
} 