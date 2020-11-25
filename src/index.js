ctx = [];
const app = document.getElementById("app");

defaultGrafica = "pie";
tipoGrafica = [
    "bar",
    "pie",
    "doughnut",
    "line",
]

cargar();
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
    newElement.setAttribute("class", "col s6");

    newElement.appendChild(newCanvas);
    app.appendChild(newElement);
}