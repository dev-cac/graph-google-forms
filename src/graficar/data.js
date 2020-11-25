var pregunta = [];
var respuesta = [];

/* Cargar Archivo e Iniciar Graficas  ======================================================================================= */

function cargar() {
    $.ajax({
        url: "archivo.csv",
        dataType: "text",
        contentType: "charset-utf-8",
    }).done(parseData);
}

function leerCsv(texto, separador = '",', omitirEncabezado = false) {
    if (typeof texto !== "string") {
        throw TypeError("El argumento debe ser una cadena de texto");
    }
    return texto
        .slice(omitirEncabezado ? texto.indexOf("\n") + 1 : 0)
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
