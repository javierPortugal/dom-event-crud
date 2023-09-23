console.log("Entro index.js");

let peliculas =JSON.parse(localStorage.getItem("peliculas"))||[];

//Referencia a mis inputs
const inputTitulo = document.getElementById("inputTitulo");
const inputEstreno = document.getElementById("inputEstreno");
const inputGenero = document.getElementById("inputGenero");
const inputImagen = document.getElementById("inputImagen");
const inputSinopsis = document.getElementById("inputSinopsis");


//referencias a los botones
const btnBorratTodo = document.getElementById("btnBorrarTodo");
const btnAgregar = document.getElementById("btnAgregar");

const divPeliculas = document.getElementById("divPeliculas");
const alertSinPeliculas = document.getElementById("alertSinPeliculas");

let indexEditar = null;


//clases inician con la primera letra mayuscula
class Pelicula{
    constructor(titulo, estreno, genero, imagen, sinopsis){
        this.tituloClase = titulo;
        this.estrenoClase = estreno;
        this.generoClase = genero;
        this.sinopsisClase = sinopsis;
        this.imagenClase = imagen;
    }
}


function  guardarPelicula() {
    console.log("Entro funcion guardar pelicula");
    let titulo = inputTitulo.value;
    let estreno = inputEstreno.value;
    let genero = inputGenero.value;
    let imagen = inputImagen.value;
    let sinopsis = inputSinopsis.value;
    let pelicula = new Pelicula(
        titulo,
        estreno,
        genero,
        imagen,
        sinopsis
    );
    console.log(pelicula);


}

function  borrarTodo() {
    console.log("Entro funcion borrar todo");
}


btnAgregar.addEventListener("click", guardarPelicula);
btnBorrarTodo.addEventListener("click", borrarTodo);


