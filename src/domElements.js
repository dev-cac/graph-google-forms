import { graph } from './chart'

function createElement($elm, nomid, classElement) {
  let $newElement = document.createElement("div");
  let $newCanvas = document.createElement("canvas");

  $newCanvas.id = nomid;
  $newElement.setAttribute("class", classElement);
  $newElement.appendChild($newCanvas);

  $elm.appendChild($newElement);
}

export function load($elm, questions, answers, options) {
  const ctx = [];

  for (let i = 0; i < answers.length; i++) {
    let id = "num" + i;
    ctx.push(id);
  }

  for (let i = 0; i < ctx.length; i++) {
    createElement($elm, ctx[i], options.class);
  }

  for (let i = 0; i < answers.length; i++) {
    graph(ctx[i], options.typeGraph[i] || options.defaultGraph, questions[i], answers[i]);
  }
}
