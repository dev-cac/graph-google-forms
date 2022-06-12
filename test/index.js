import { graphChart } from 'graph-chart';

const graphDom = document.getElementById('test');

const path = "./test.csv"

const settings = {
  defaultGraph: "polarArea",
  style: {
    class: 'col s12 m12 l6',
    showInfo: true,
    includeTitle: true,
  },
  typeGraph: [
    "doughnut",
    "line",
    "bar",
    "pie"
  ]
}

graphChart(graphDom, path, settings);
