import csv from 'csv-parser'
import fs from 'fs'

export const graphChart = (fileName) => {
  const results = [];

  fs.createReadStream(fileName)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => file(results));
}

export const file = (data) => {
  console.log(data);
}

export default graphChart;
