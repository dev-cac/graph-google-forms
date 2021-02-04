export function graficar(ctx, tipo, titulo, datos){
    let opcion;
    var opciones = [];
    var eleccion = [];

    /* Creamos 2 listas los datos no repetidos */
    for(let i=0;i<datos.length;i++){
        if(opciones.indexOf(datos[i]) == -1){
            opciones.push(datos[i]);
            eleccion.push(0);
        }
    }
    opciones = opciones.sort();

    /* Aumentamos la suma de cada posicion para mirar los datos que se repiten */
    for(let i=0;i<datos.length;i++){
        if(opciones.indexOf(datos[i]) != -1){
            eleccion[opciones.indexOf(datos[i])]++;
        }
    }

    /* Asigamos las opciones de la grafica */
    if(tipo == "pie" || tipo == "doughnut" || tipo == "polarArea"){
        opcion = {
            responsive: true,
            title: {
                display: true,
                text: titulo,
                fontSize: 15,
                padding: 30,
                fontColor: "#121212"
            },
            tooltips: {
                callbacks: {
                  label: function(tooltipItem, data) {
                    var dataset = data.datasets[tooltipItem.datasetIndex];
                    var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
                      return previousValue + currentValue;
                    });

                    var currentValue = dataset.data[tooltipItem.index];
                    var precentage = Math.floor(((currentValue/total) * 100)+0.5);

                    return precentage + "%";
                  }
                }
           }
        }
    } else {
        opcion = {
            responsive: true,
            title: {
                display: true,
                text: titulo,
                fontSize: 15,
                padding: 30,
                fontColor: "#121212"
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
                xAxes:[{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    }

    /* Graficamos */
    let ctxx = document.getElementById(ctx).getContext("2d");
    const chart = new Chart(ctxx, {
        type: tipo,
        data: {
            labels: opciones,
            datasets: [
                {
                    label: titulo,
                    backgroundColor: color(opciones.length),
                    borderWidth: 2,
                    data: eleccion,
                }
            ]
        },
        options: opcion,
    });
}

/* Colores Aleatorios ============================================================================================ */

function cambio(num) {
    if (num == 10) {
        return "A";
    }
    if (num == 11) {
        return "B";
    }
    if (num == 12) {
        return "C";
    }
    if (num == 13) {
        return "D";
    }
    if (num == 14) {
        return "E";
    }
    if (num == 15) {
        return "F";
    }
    return num;
}

function colorAleatorio() {
    let num1 = parseInt(Math.random() * (15 - 0)) + 0;
    let num2 = parseInt(Math.random() * (15 - 0)) + 0;
    let num3 = parseInt(Math.random() * (15 - 0)) + 0;
    let num4 = parseInt(Math.random() * (15 - 0)) + 0;
    let num5 = parseInt(Math.random() * (15 - 0)) + 0;
    let num6 = parseInt(Math.random() * (15 - 0)) + 0;
    let color = "#" + cambio(num1) + cambio(num2) + cambio(num3) + cambio(num4) + cambio(num5) + cambio(num6);

    return color;
}

function color(cantidad) {
    var colorr = Chart.helpers.color;
    let colores = [];
    for (let i = 0; i < cantidad; i++) {
        colores.push(colorr(colorAleatorio()).alpha(0.5).rgbString());
    }
    return colores;
}
