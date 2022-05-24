/**
 * 显示时间模块
 */
var t = null;
t = setTimeout(time, 1000);
function time() {
  clearTimeout(t);
  dt = new Date();
  var y = dt.getFullYear();
  var mt = dt.getMonth() + 1;
  var day = dt.getDate();
  var h = dt.getHours();
  var m = dt.getMinutes();
  var s = dt.getSeconds();
  document.querySelector(".date").innerHTML =
    "当前时间：" +
    y +
    "/" +
    mt +
    "/" +
    day +
    " " +
    h +
    ":" +
    m +
    ":" +
    s;
  t = setTimeout(time, 1000);
}

// 左柱状图
(function () {
  const myChart = echarts.init(document.querySelector(".left .bar .chart"))
  const option = {
    color: '#2f89cf',
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow"
      }
    },
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ["旅游行业", "教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业"],
      axisLabel: {
        color: 'rgba(255, 255, 255, .6)',
        fontSize: 12
      },
      axisLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: 'rgba(255, 255, 255, .6)',
        fontSize: 12
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(255,255,255,.1)",
          width: 2
        }
      },
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
        }
      }
    },
    series: [
      {
        data: [220, 300, 340, 860, 1520, 1250, 650],
        type: 'bar',
        barWidth: "40%",
        itemStyle: {
          borderRadius: 4
        }
      }
    ]
  };
  myChart.setOption(option);

  // 图表自适应缩放
  window.addEventListener("resize", () => {
    myChart.resize()
  })
})();

// 右柱状图
(function () {
  const myChart = echarts.init(document.querySelector(".right .bar .chart"))
  const myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  const option = {
    grid: {
      top: "10%",
      left: "22%",
      bottom: "10%"
    },
    xAxis: {
      show: false
    },
    yAxis: [
      {
        type: 'category',
        data: ['HTML5', 'CSS3', 'JavaScript', 'Vue', "Node"],
        inverse: true,
        axisLabel: {
          color: '#fff'
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      },
      {
        data: [],
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: "#fff"
        }
      }
    ],
    series: [
      {
        name: '进度条',
        type: 'bar',
        data: [88, 75, 66, 34, 54],
        yAxisIndex: 0,
        barCategoryGap: 50,
        barWidth: 10,
        itemStyle: {
          borderRadius: 20,
          color: (item) => {
            return myColor[item.dataIndex];
          }
        },
        label: {
          color: "#fff",
          show: true,
          formatter: "{c}%"
        }
      },
      {
        name: '进度框',
        type: 'bar',
        data: [100, 100, 100, 100, 100],
        yAxisIndex: 1,
        barCategoryGap: 50,
        barWidth: 15,
        itemStyle: {
          color: "none",
          borderColor: "#44ddee",
          borderWidth: 2,
          borderRadius: 15
        },
      }
    ]
  };
  myChart.setOption(option);

  // 图表自适应缩放
  window.addEventListener("resize", () => {
    myChart.resize()
  })
})();

// 左折线图
(function () {
  const myChart = echarts.init(document.querySelector(".left .line .chart"))
  const myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  const option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['新增粉丝', '新增游客'],
      textStyle: {
        color: '#4c9bfd'
      }
    },
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      show: true,
      borderColor: '#012f4a',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月',],
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#4c9bfd"
      },
      axisLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#4c9bfd"
      },
      splitLine: {
        show: false
      },
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
        }
      }
    },
    series: [
      {
        name: '新增粉丝',
        type: 'line',
        data: [120, 132, 101, 134, 90, 230, 210, 333, 551, 241, 103, 421],
        labelLine: {
          smooth: true
        }
      },
      {
        name: '新增游客',
        type: 'line',
        data: [220, 182, 191, 234, 290, 330, 310, 210, 260, 520, 320, 540]
      }
    ]
  };
  myChart.setOption(option);

  // 图表自适应缩放
  window.addEventListener("resize", () => {
    myChart.resize()
  })
})()
