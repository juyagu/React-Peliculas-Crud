import React from "react";
import {
  withStyles,
  Card,
  CardContent,
  Typography,
  IconButton
} from "@material-ui/core";
import { DeleteOutlined, EditOutlined } from "@material-ui/icons";
import PropTypes from "prop-types";
import Styles from "../style/Styles";

const ListadoCard = props => {
    const {
        classes,
        id,
        titulo,
        director,
        genero,
        actualizarPelicula,
        eliminarPelicula
    } = props
    return(
        <Card className={classes.card} elevation={1}>
        <CardContent>
          <IconButton
            aria-label="Update"
            className={classes.edit}
            onClick={e => actualizarPelicula(id)}
          >
            <EditOutlined />
          </IconButton>
          <IconButton
            aria-label="Delete"
            className={classes.delete}
            onClick={() => eliminarPelicula(id)}
          >
            <DeleteOutlined />
          </IconButton>
          <Typography variant="h5" className={classes.name}>
            {titulo}
          </Typography>
          <Typography variant="h6" className={classes.body}>
            {director}
          </Typography>
          <Typography variant="body1" className={classes.details}>
            {genero}
          </Typography>
        </CardContent>
      </Card>
    )
}

ListadoCard.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.number,
    titulo: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    genero: PropTypes.string.isRequired,
    actualizarPelicula: PropTypes.func.isRequired,
    eliminarPelicula: PropTypes.func.isRequired
  };
  
  export default withStyles(Styles)(ListadoCard);
  