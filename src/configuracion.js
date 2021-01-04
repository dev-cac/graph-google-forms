/* Tipos de Graficas

- pie
- doughnut
- line
- bar
- horizontalBar
- polarArea

*/


/* Configuracion de funcionamiento */

const app = document.getElementById("app");          // se obtiene el id del cuadro donde colocaremos las graficas

const clasesDelCuadro = "col s12 m12 l6";            // Estas clases fueron sacadas de Materialize
const mostrarInformacion = true;                     // muestra los datos recopilador por consola


/* Configuracion de diseño de las graficas */
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
