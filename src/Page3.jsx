import React from "react";
import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/300.css";

export default function Page3() {
  return (
    <div className="bodyBlack">
      <Grid container direction="column">
        <Grid item spacing={16} container direction="column">
          <Grid item />
          <Grid item container spacing={10}>
            <Grid item xs={12} md={1} />
            <Grid item xs={12} md={2}>
              <Button variant="contained"> About us </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" >
                <b>
                  <span className="span">W</span>
                  hat is <br />
                  Loop Persuade
                </b>
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item spacing={5} container direction="column">
          <Grid item />
          <Grid item container spacing={5}>
            <Grid item xs={12} md={1} />
            <Grid item xs={12} md={2}>
              <Paper style={{ height: "100%", width: "100%" }}></Paper>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="p" >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
                velit vitae magnam aperiam sapiente cupiditate adipisci ducimus
                unde cumque quidem mollitia, tenetur at qui iste facere ex alias
                veniam ad cum facilis id? Alias, maiores odit earum nostrum
                repellendus, neque eius labore non dolores laborum delectus
                dolore quasi voluptatem aliquid sit adipisci. Commodi atque
                inventore est! Recusandae, tenetur dignissimos? Libero harum
                asperiores earum ipsam quas explicabo quae accusamus
                repellendus,
                <br />
                <br /> fugiat architecto inventore. Architecto tenetur dolorem
                alias expedita nihil maxime labore sed praesentium ullam impedit
                et voluptatibus temporibus minima, obcaecati repudiandae dolorum
                repellat iste fugiat esse magni est exercitationem excepturi
                natus illo! Repellendus veniam ab provident sequi alias beatae
                eligendi quibusdam natus laboriosam eius rem quia praesentium,
                saepe, id accusamus error soluta? Molestiae magni culpa minima
                neque nobis non, corporis laborum excepturi a facere incidunt.
                <br />
                <br /> Rem repellendus impedit eius temporibus! Eveniet maxime
                consequuntur, quisquam cum iste excepturi unde iure enim
                voluptatum blanditiis eaque exercitationem nesciunt provident
                nulla! Soluta sapiente mollitia, repellendus delectus totam,
                fugiat at et maxime facilis animi sed ipsam pariatur voluptate
                dignissimos velit. unde dolores nesciunt magnam doloribus eius
                nemo rem dolor placeat dicta voluptas ex quisquam! Dolor nobis
                quas animi quibusdam, repudiandae obcaecati assumenda quia amet.
              </Typography>
            </Grid>

            <Grid item xs={12} md={10} />
            <Grid item xs={12} md={2}>
              <Button variant="contained"> Explore </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
