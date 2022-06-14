import { setSettings } from './settings'
import { load } from './domElements'

let questions = []
let answers = []

export const graphChart = async ($elm, fileName, options = {}) => {
  options = setSettings(options)

  if (!$elm || !fileName) return console.error('Missing arguments for graphChart');

  const data = await readFetch(fileName);
  file($elm, data, options);
}

const readFetch = async (fileName) => {
  const Papa = await import('papaparse')

  const res = await fetch(fileName)
  if (!res.ok) return console.error(`Error fetching file: ${fileName}`)

  const csv = await res.text()
  const data = Papa.parse(csv)

  return data.data
}

const sortAnswers = (answers) => {
  const tempAnswers = []
  let memory = []

  for(let i = 0; i < answers[0].length; i++) {
    for(let j = 0; j < answers.length; j++) {
      memory.push(answers[j][i])
    }
    tempAnswers.push(memory)
    memory = []
  }

  return tempAnswers
}

export const file = ($elm, data, options = {}) => {
  options = setSettings(options)

  if (!$elm || !data) return console.error('Missing arguments for file:graphChart');
  if(options.style.includeTitle) questions = data[0];

  data.shift();
  questions.shift();

  for(let i of data) { i.shift(); }
  answers = sortAnswers(data)

  if(options.style.showInfo) {
    console.log(questions)
    console.log(answers)
  }

  load($elm, questions, answers, options);
}

export default graphChart;
