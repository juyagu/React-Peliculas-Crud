import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import CrearPelicula from './CrearPelicula';
import Listado from './Listado';

class Crud extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            peliculas: [],
            id: null,
            titulo: "",
            director: "",
            genero: "",
            id_genero: 0,
            foto: "",
            isEditing: false
        }
        this.actualizarPelicula = this.actualizarPelicula.bind(this);
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addData = e => {
        e.preventDefault();
        const { titulo, director, genero } = this.state;
        if (!titulo || !director || !genero) return;
        var obj = {
            titulo: titulo,
            director: director,
            genero: genero
        }
        fetch("http://localhost:3001/angular5/peliculas", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then(res => res.json())
            .then(respuesta => this.obtenerPeliculas())
            .then(() => this.reset())
    }

    reset = () => {
        this.setState({
            titulo: "",
            director: "",
            genero: ""
        })
    }

    eliminarPelicula = id => {
        fetch("http://localhost:3001/angular5/peliculas/" + id, {
            method: 'delete'
        })
            .then(res => res.json())
            .then(resultado => this.obtenerPeliculas)
    }

    componentDidMount() {
        this.obtenerPeliculas();
    }

    obtenerPeliculas() {
        fetch("http://localhost:3001/angular5/peliculas")
            .then(res => res.json())
            .then(resultado => {
                this.setState({
                    peliculas: resultado
                })
            },
                error => {
                    this.setState({
                        error: error
                    })
                })
    }

    actualizarPelicula(id) {
        fetch("http://localhost:3001/angular5/peliculas/" + id)
            .then(res => res.json())
            .then(resultado => {
                console.log(resultado);
                this.setState({
                    id: resultado.id,
                    titulo: resultado.titulo,
                    director: resultado.director,
                    genero: resultado.genero,
                    isEditing: true
                })
            })
    }

    saveUpdate(id) {
        const { titulo, director, genero } = this.state;
        if (!titulo || !director || !genero) return;
        var obj = {
            titulo: titulo,
            director: director,
            genero: genero
        }
        fetch("http://localhost:3001/angular5/peliculas/" + id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then(res => res.json())
            .then(respuesta => this.obtenerPeliculas())
            .then(() => this.reset())
    }



    render() {
        const {
            peliculas,
            id,
            titulo,
            director,
            genero,
            isEditing
        } = this.state;
        return (
            <Grid container spacing={0}>
                <Grid item ls={6} md={6} sm={12} xs={12}>
                    <CrearPelicula
                        id={id}
                        titulo={titulo}
                        director={director}
                        genero={genero}
                        addData={this.addData}
                        handleChange={this.handleChange}
                        saveUpdate={this.saveUpdate}
                        isEditing={isEditing}
                    />
                </Grid>
                <Grid item ls={6} md={6} sm={12} xs={12}>
                    <Listado
                        peliculas={peliculas}
                        eliminarPelicula={this.eliminarPelicula}
                        actualizarPelicula={this.actualizarPelicula}
                    />
                </Grid>
            </Grid>
        )
    }
}

export default Crud;