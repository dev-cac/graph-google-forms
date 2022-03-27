import Chart from 'chart.js/auto'

export const graph = (ctx, type, title, data) => {
  let option;
  let options = [];
  let select = [];

  for(let i=0;i<data.length;i++){
    if(options.indexOf(data[i]) == -1){
      options.push(data[i]);
      select.push(0);
    }
  }
  options.sort();

  for(let i=0;i<data.length;i++){
    if(options.indexOf(data[i]) != -1){
      select[options.indexOf(data[i])]++;
    }
  }

  let ctxx = document.getElementById(ctx).getContext("2d");
  new Chart(ctxx, {
    type,
    data: {
      labels: options,
      datasets: [
        {
          label: title,
          borderWidth: 2,
          backgroundColor: poolColors(options.length),
          data: select,
        }
      ]
    },
    options: option,
  });
}

var poolColors = function (a) {
  var pool = [];
  for(let i=0;i<a;i++){
      pool.push(dynamicColors());
  }
  return pool;
}

var dynamicColors = function() {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  return "rgb(" + r + "," + g + "," + b + ")";
}
