import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    height: 240,
    marginTop:20
  },
  image: {
    margin: 15,
    borderRadius: 15,
  },
  description: {
    height: 50,
    fontSize :20
  },
  date: {
    textAlign: "left",
  },
  seeMore: {
    textAlign: "right",
  },
});

export const InfoCard = (props) => {
  const classes = useStyles();
  return (
      <div>
    <Card className={classes.root}>
      <CardActionArea>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <CardMedia
              className={classes.image}
              component="img"
              height="200"
              image={props.image}
               
            />
          </Grid>
          <Grid item xs={7}>
            <CardContent>
              <Grid
                container
                spacing={2}
              >
                <Grid item xs={12}>
                  <Typography gutterBottom variant="h6" component="h8">
                    {props.description }
                  </Typography>
                  <Typography
                    className={classes.description}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  > 
                    Patente : {props.patent}
                    <br/>
                    Cantidad de ruedas : {props.wheels}
                    <br/>
                    Numero de chasis: {props.chasisNumber}
                    <br/>
                    kilometros realizados de chasis: {120.000}
                    <br/>
                    Proximo mantenimiento (kms): {10.000}
                    <br/>
                    Habilitado: { props.disabled? 'NO':'SI'}
                  </Typography>
                </Grid>
                
              </Grid>
            </CardContent>
          </Grid>
        </Grid>
      </CardActionArea>
 
    </Card>
    </div>
  );
};
