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


/* Configuracion de diseño de las graficas */
const defaultGrafica = "polarArea";

const tipoGrafica = [
    "doughnut",
    "line",
    "horizontalBar",
    "bar",
]

const nombreArchivo = "form";
const nombrePreguntas = true;

/* Ejecutar Programa */

cargar();
