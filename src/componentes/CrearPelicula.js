import React from "react";
import { withStyles, TextField, Button } from "@material-ui/core";
import PropTypes from "prop-types";
import Styles from "../style/Styles.js";

const CrearPelicula = props => {
    const {
        id,
        titulo,
        director,
        genero,
        isEditing,
        handleChange,
        addData,
        saveUpdate,
        classes
    } = props;

    return (
        <div className={classes.formWrapper}>
      <form onSubmit={addData}>
        <TextField
          id="titulo-id"
          name="titulo"
          label="titulo"
          onChange={handleChange}
          value={titulo}
          fullWidth
          required
        />
        <TextField
          id="director-id"
          name="director"
          label="director"
          onChange={handleChange}
          value={director}
          fullWidth
          required
        />
        <TextField
          id="genero-id"
          name="genero"
          label="Género"
          onChange={handleChange}
          value={genero}
          fullWidth
          required
        />
        {isEditing ? (
          <Button
            type="submit"
            variant="outlined"
            className={classes.button}
            onClick={e => saveUpdate(e, id)}
            fullWidth
          >
            Update
          </Button>
        ) : (
          <Button
            type="submit"
            variant="outlined"
            className={classes.button}
            fullWidth
          >
            Submit
          </Button>
        )}
      </form>
    </div>
    )
}

CrearPelicula.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.number,
    titulo: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    genero: PropTypes.string.isRequired,
    addData: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    saveUpdate: PropTypes.func.isRequired
  };

  export default withStyles(Styles)(CrearPelicula);