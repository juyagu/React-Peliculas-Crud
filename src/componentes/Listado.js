import React from "react";
import PropTypes from "prop-types";
import ListadoCard from './ListadoCard';

const Listado = props => {
    const {peliculas, actualizarPelicula,eliminarPelicula} = props;
    return(
        <div>
      {peliculas.map(data => {
        return (
          <ListadoCard
            key={data.id}
            id={data.id}
            titulo={data.titulo}
            director={data.direccion}
            genero={data.genero}
            eliminarPelicula={eliminarPelicula}
            actualizarPelicula={actualizarPelicula}
          />
        );
      })}
    </div>
    )
}
Listado.propTypes = {
    eliminarPelicula: PropTypes.func.isRequired,
    actualizarPelicula: PropTypes.func.isRequired,
    peliculas: PropTypes.array.isRequired
  };
  
  export default Listado;