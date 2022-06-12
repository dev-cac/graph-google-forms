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
    let id = `graph-${Date.now()}#${i}`;
    ctx.push(id);
  }

  for (let i = 0; i < ctx.length; i++) {
    createElement($elm, ctx[i], options.style.class);
  }

  for (let i = 0; i < answers.length; i++) {
    const type = options.typeGraph[i] || options.defaultGraph

    graph({
      ctx: ctx[i],
      type,
      title: questions[i],
      data: answers[i],
      options
    });
  }
}
