import { defaultSettings } from './settings'
import { load } from './domElements'

let questions = []
let answers = []

export const graphChart = async ($elm, fileName, options = defaultSettings) => {
  if (!$elm || !fileName || !options) return console.error('Missing arguments for graphChart');

  const data = await readFetch(fileName)
  file($elm, data, options);
}

const readFetch = async (fileName) => {
  const Papa = await import('papaparse');

  const res = await fetch(fileName);
  const csv = await res.text()
  const data = Papa.parse(csv)

  return data.data
}

export const file = ($elm, data, options = defaultSettings) => {
  if (!$elm || !data || !options) return console.error('Missing arguments for file:graphChart');

  if(options.includeTitle) questions = data[0];
  data.shift();
  answers = data;

  if(options.showInfo) {
    console.log(questions)
    console.log(answers)
  }

  load($elm, questions, answers, options);
}

export default graphChart;
