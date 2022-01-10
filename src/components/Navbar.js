import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  navBar:{
    backgroundColor:"##5F04B4"
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(10),
   
    "&:hover": {
        border: "3px dotted #ff7a59",
        color: "#ff7a59",
        background: "#fff",
    //   color: "yellow",
    //   borderBottom: "1px solid white",
    //   transform: "skew(-10deg)",
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.navBar}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Vec Fleet
        </Typography>
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Listado
            </Link>
            <Link to="/New" className={classes.link}>
              Agregar Vehiculo
            </Link>
            <Link to="/Delete" className={classes.link}>
              Eliminar/Baja
            </Link>
            
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;