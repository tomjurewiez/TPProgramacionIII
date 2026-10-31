
class JuegosDeMesa{

    imagen;
    id;
    nombre;
    edades;
    numeroDeJugadores;
    detallesDelJuego;
    precio;
    
    constructor(imagen, id, nombre, edades, numeroDeJugadores, detallesDelJuego, precio) {
    this.imagen = imagen;
    this.id = id;
    this.nombre = nombre;
    this.edades = edades;
    this.numeroDeJugadores = numeroDeJugadores;
    this.detallesDelJuego = detallesDelJuego;
    this.precio = precio;
    
  }


  toJsonString() {
    return JSON.stringify(this);
  }

  createFromJsonString(json) {
    const Juego = JSON.parse(json);
    return new JuegosDeMesa(Juego.imagen, Juego.id, Juego.nombre, Juego.edades, Juego.numeroDeJugadores,
         Juego.detallesDelJuego, Juego.precio);
  }


  createHtmlElement() {

    const div = document.createElement("div");
    const img = document.createElement("img");
    const nombre = document.createElement("h3");
    const edades = document.createElement("p");
    const numeroDeJugadores = document.createElement("p");
    const detallesDelJuego = document.createElement("p");
    const precio = document.createElement("p");
    const guardar = document.createElement("button");

    
    div.className = "juegosDeMesa";
    img.src = this.imagen;
    nombre.textContent = this.nombre;
    edades.textContent = this.edades;
    numeroDeJugadores.textContent = this.numeroDeJugadores;
    detallesDelJuego.textContent = this.detallesDelJuego;
    precio.textContent = this.precio;
    
    guardar.textContent = "guardar";

    

    guardar.onclick = () => {
     Serie.guardarSerie(this);
    } 

    div.append(img, nombre, edades, numeroDeJugadores, detallesDelJuego, precio, guardar);


    return div;

  }


}







