const readFetch = async (fileName) => {
  const Papa = await import('papaparse');

  const res = await fetch(fileName);
  const csv = await res.text()
  const data = Papa.parse(csv)

  return data
}

export const graphChart = async ($elm, fileName, options) => {
  const data = await readFetch(fileName)
  file(data);
}

export const file = (data) => {
  console.log(data);
}

export default graphChart;
