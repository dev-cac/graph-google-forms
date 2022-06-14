import Chart from 'chart.js/auto'
import randomColor from 'randomcolor'

export const graph = ({
  ctx, type, title, data, options
}) => {
  let selectTitle = [];
  let selectCount = [];

  /* Se optienen los valores unicos */
  for(let i=0;i<data.length;i++){
    if(selectTitle.indexOf(data[i]) == -1){
      selectTitle.push(data[i]);
      selectCount.push(0);
    }
  }

  selectTitle.sort();

  /* Una vez ordenados se cuenta el numero de repeticiones */
  for(let i=0;i<data.length;i++){
    if(selectTitle.indexOf(data[i]) != -1){
      selectCount[selectTitle.indexOf(data[i])]++;
    }
  }

  createChart({
    ctx, type, title, selectTitle, selectCount, options
  })
}

const createChart = ({
  ctx,
  type,
  title,
  selectTitle,
  selectCount,
  options
}) => {
  const newCtx = document.getElementById(ctx).getContext("2d");

  new Chart(newCtx, {
    type,
    data: {
      labels: selectTitle,
      datasets: [
        {
          label: title || "",
          fillColor: '#000',
          borderWidth: options.style.borderWidth,
          borderColor: options.style.borderColor,
          backgroundColor: poolColors(selectTitle.length, options),
          data: selectCount,
        }
      ]
    },
    options: setOptions(type, title)
  });
}

const DEFAULT_GRAPHS = ["pie", "doughnut", "polarArea"];

const setOptions = (type, title) => {
  const tooltip = DEFAULT_GRAPHS.includes(type) ? {
    callbacks: {
      label: function(context) {
        const currentValue = context.dataset.data[context.dataIndex];

        const sum = context.dataset.data.reduce((acc, curr) => {
          return acc + curr
        }, 0)

        const percentage = (currentValue / sum) * 100;
        const stringPercentage = percentage % 1 === 0 ? parseInt(percentage) : percentage.toFixed(2);

        const label = `${context.label} (${stringPercentage}%)`;
        return label;
      }
    }
  } : {
    callbacks: {
      title: function(context) {
        return '';
      },
      label: function(context) {
        const currentValue = context.dataset.data[context.dataIndex];

        const label = `${context.label} (${currentValue})`;
        return label;
      }
    }
  }

  const OPTIONS = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        align: 'center',
        text: title,
        fontSize: 15,
        fullSize: true,
        padding: 20,
        color: "#121212"
      },
      tooltip,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }],
        xAxes:[{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  }

  return OPTIONS;
}

var poolColors = function (length, options) {
  return randomColor({
    count: length,
    luminosity: options.style.isDark ? 'dark' : 'light',
    format: 'rgba',
    alpha: options.style.opacityColor || 1
  })
}
