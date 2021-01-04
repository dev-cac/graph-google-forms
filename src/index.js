/* Tipos de Graficas

- pie
- doughnut
- line
- bar
- horizontalBar
- polarArea

*/

const app = document.getElementById("app");

const defaultGrafica = "polarArea";

const tipoGrafica = [
    "doughnut",
    "line",
    "horizontalBar",
    "bar",
]

const nombreArchivo = "form";
const nombrePreguntas = true;

cargar();
