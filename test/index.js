import { graphChart } from 'graph-chart';

const graphDom = document.getElementById('test');

const path = "./test.csv"

const settings = {
  defaultGraph: "polarArea",
  class: 'col s12 m12 l6',
  typeGraph: [
    "doughnut",
    "line",
    "bar",
    "pie"
  ],
  showInfo: true,
  includeTitle: true,
}

graphChart(graphDom, path, settings);
