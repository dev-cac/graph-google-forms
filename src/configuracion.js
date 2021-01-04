/* Tipos de Graficas

- pie
- doughnut
- line
- bar
- horizontalBar
- polarArea

*/


/* Configuracion de funcionamiento */

const app = document.getElementById("app");

const clasesDelCuadro = "col s12 m12 l6";
const mostrarInformacion = true;

const defaultGrafica = "polarArea";

const tipoGrafica = [
    "doughnut",
    "line",
    "horizontalBar",
]

const nombreArchivo = "form";
const incluirNombrePreguntas = true;


/* Ejecutar el Programa */

iniciar();
