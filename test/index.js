import { graphChart } from 'graph-chart';

const graphDom = document.getElementById('test');

const path = "./test.csv"

const settings = {
  defaultGraph: "polarArea",
  style: {
    class: 'col s12 m6 l6'
  },
  typeGraph: [
    "doughnut",
    "line",
    "bar",
    "pie"
  ]
}

graphChart(graphDom, path, settings);

