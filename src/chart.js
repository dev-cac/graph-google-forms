import Chart from 'chart.js/auto'

export const graph = ({
  ctx, type, title, data, options
}) => {
  let option;
  let selectTitle = [];
  let selectCount = [];

  for(let i=0;i<data.length;i++){
    if(selectTitle.indexOf(data[i]) == -1){
      selectTitle.push(data[i]);
      selectCount.push(0);
    }
  }

  selectTitle.sort();

  for(let i=0;i<data.length;i++){
    if(selectTitle.indexOf(data[i]) != -1){
      selectCount[selectTitle.indexOf(data[i])]++;
    }
  }

  let newCtx = document.getElementById(ctx).getContext("2d");
  new Chart(newCtx, {
    type,
    data: {
      labels: selectTitle,
      datasets: [
        {
          label: title || "",
          borderWidth: 2,
          backgroundColor: poolColors(selectTitle.length, options.style.opacityColor),
          data: selectCount,
        }
      ]
    },
    options: option,
  });
}

var poolColors = function (length, opacity) {
  var pool = [];
  for(let i=0;i<length;i++){
      pool.push(dynamicColors(opacity));
  }
  return pool;
}

var dynamicColors = function(opacity) {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
