var pregunta = [];
var respuesta = [];

/* Cargar Archivo e Iniciar Graficas  ======================================================================================= */

function cargar() {
    $.ajax({
        url: nombreArchivo + ".csv",
        dataType: "text",
        contentType: "charset-utf-8",
    }).done(parseData);
}

function leerCsv(texto, separador = '",', encabezado = nombrePreguntas) {
    if (typeof texto !== "string") {
        throw TypeError("El argumento debe ser una cadena de texto");
    }
    return texto
        .slice(encabezado ? 0 :  texto.indexOf("\n") + 1)
        .split("\n")
        .map((l) => l.split(separador));
}

/* Conversion de CSV */
function parseData(data) {
    try {
        let datos = leerCsv(data);
        if (datos) {
            memoria(datos);
        }
    } catch (e) {
        console.error("Error:" + e);
    }
}

function memoria(data) {
    if(nombrePreguntas){
        for (let i = 0; i < data.length; i++) {
            data[i].shift();
        }
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].length; j++) {
                data[i][j] = data[i][j].replaceAll('"', "");
            }
        }
        /* Ingresa todas las preguntas en un array */
        for (let i = 0; i < data[0].length; i++) {
            pregunta.push(data[0][i]);
        }
        data.shift();
    } else {
        for (let i = 0; i < data.length; i++) {
            data[i].shift();
        }
        for (let i = 0; i < data[0].length; i++) {
            pregunta.push("");
        }
    }

    /* Cada respuesta queda en un array */
    let arrayMemoria = [];
    for(let i=0; i<data[1].length; i++){
        for(let j=0; j<data.length; j++){
            arrayMemoria.push(data[j][i]);
        }
        respuesta.push(arrayMemoria);
        arrayMemoria = [];
    }

    load();
}

/* Funciones Para Imprimir las Graficas  ====================================================================================== */
var ctx = [];

function load(){
    console.log(pregunta);
    console.log(respuesta);

    for(let i=0; i<pregunta.length; i++){
        let identificador = "num"+i;
        ctx.push(identificador);
    }

    for(let i=0; i<ctx.length; i++){
        crearElemento(ctx[i]);
    }

    for(let i=0; i<pregunta.length; i++){
        if(tipoGrafica[i]===undefined || tipoGrafica[i]===""){
            graficar(ctx[i], defaultGrafica, pregunta[i], respuesta[i]);
        }else{
            graficar(ctx[i], tipoGrafica[i], pregunta[i], respuesta[i]);
        }
    }
}

function crearElemento(nomid){
    let newElement = document.createElement("div");
    let newCanvas = document.createElement("canvas");

    newCanvas.id = nomid;
    newElement.setAttribute("class", "col m12 l6");

    newElement.appendChild(newCanvas);
    app.appendChild(newElement);
}
