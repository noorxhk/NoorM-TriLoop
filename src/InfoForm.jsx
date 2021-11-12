import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/300.css";
import TextField from "@mui/material/TextField";

import { styled } from '@mui/system';


const StyledTextField = styled(TextField)`
  .MuiInput-underline::before {
    border-bottom-color: white;
  }
  .MuiInput-underline:hover:not(.Mui-disabled)::before {
    border-bottom-color: white;
  }
  .MuiInput-underline::after {
    border-bottom-color: white;
  }
`;

export default function InfoForm() {
  return (
    <div className="bodyBlack">
      <Grid container spacing={0}>
        <Grid item xs={12} md={4} />
        <Grid item xs={12} md={6}>
          <Typography variant="h1">
            <br></br>
            <b>
              <span className="span">H</span>
              ave Some Questions
            </b>
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={0}>
        <Grid item xs={12} md={4} />

        <Grid item xs={12} md={2}>
          <StyledTextField
          
            fullWidth
            variant="standard"
            label="First Name"
            InputLabelProps={{ className: "customtextfield" }}
            InputProps={{ className: "customtextfield" }}
            margin="normal"
            InputProps={{classes:{
              root:{
                '& .MuiInputBase-input': {
                  color: '#fff', // Text color
                },
                '& .MuiInput-underline:before': {
                  borderBottomColor: '#fff', // Semi-transparent underline
                }
              }
            }}}
          />
        </Grid>
        <Grid item xs={12} md={1} />
        <Grid item xs={12} md={2}>
          <StyledTextField
            fullWidth
            variant="standard"
            label="Last Name"
            InputLabelProps={{ className: "customtextfield" }}
            InputProps={{ className: "customtextfield" }}
            margin="normal"
          ></StyledTextField>
        </Grid>
        <Grid item xs={12} md={2} />

        <Grid item xs={12} md={4} />
        <Grid item xs={12} md={5}>
          <StyledTextField
            fullWidth
            variant="standard"
            label="Email"
            InputLabelProps={{ className: "customtextfield" }}
            InputProps={{ className: "customtextfield" }}
            margin="normal"
          ></StyledTextField>
        </Grid>
        <Grid item xs={12} md={4} />
        
        <Grid item xs={12} md={5}>
          <StyledTextField
            fullWidth
            variant="standard"
            label="Briefly tell us here"
            multiline
            rows={4}
            InputLabelProps={{ className: "customtextfield" }}
            InputProps={{ className: "customtextfield" }}
            margin="normal"
          ></StyledTextField>
        </Grid>
      </Grid>
    </div>
  );
}
