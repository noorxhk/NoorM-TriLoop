import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/300.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { color } from "@mui/system";



export default function InfoForm() {
  return (
    <div className="bodyBlack">
      <Grid container spacing={0}>
        <Grid item xs={4} />
        <Grid item xs={6}>
          <Typography variant="h1">
            <br></br>
            <b>
              <span className="span">H</span>
              ave Some Questions
              
              
              
            </b>
            
          </Typography>
        </Grid>
      </Grid>
      
              
        <Grid  container spacing={0}>
        
          <Grid item xs={3}/>        

          <Grid item xs={2}>
            <TextField fullWidth variant="filled" label="First Name"  style={{backgroundColor:"#808080" , borderRadius:"10px"}}   margin="normal"/>
          </Grid>
          <Grid item xs={1}/>
          <Grid item xs={2} >
            <TextField fullWidth variant="filled" label="Last Name"  style={{backgroundColor:"#808080" , borderRadius:"10px"}}    margin="normal"></TextField>
          </Grid>
          <Grid item xs={2}/>
          
        
          <Grid item xs={3}  />
          <Grid item xs={5}>
            <TextField fullWidth variant="filled" style={{backgroundColor:"#808080" , borderRadius:"10px"}} label="Email"   margin="normal"></TextField>
          </Grid>
          <Grid item xs={2}/>
          <Grid item xs={3} />
          <Grid item xs={5}>
            <TextField fullWidth variant="outlined" label="Briefly tell us here" multiline Rows={4}  style={{backgroundColor:"#808080" , borderRadius:"10px"}}    margin="normal"></TextField>
          </Grid>
        
      </Grid>
    </div>
  );
}
