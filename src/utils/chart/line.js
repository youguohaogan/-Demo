export const lineOptions = {
  title: {
    text: '',
    textStyle: {
      align: 'center',
      color: '#fff',
      fontSize: 20
    },
    top: '5%',
    left: 'center'
  },
  legend: {
    // icon: 'circle',
    bottom: '2%',
    right: '47.5%',
    itemWidth: 20,
    itemGap: 20,
    textStyle: {
      color: '#556677'
    }
  },
  tooltip: {
    trigger: 'axis',
    backgroundColor: '#fff',
    textStyle: {
      color: '#5c6c7c'
    },
    padding: [10, 10],
    extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)'
  },
  grid: {
    left: '2%',
    top: '5%',
    right: '3%'
  },
  yAxis: [{
    type: 'value',
    splitLine: {
      lineStyle: {
        type: 'dashed',
        color: '#DDD'
      }
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: '#DCE2E8'
      }
    },
    axisLabel: {
      textStyle: {
        color: '#556677'
      }
    }
  }]
}
export const xAxis = {
  type: 'category',
  data: [],
  axisLine: {
    lineStyle: {
      color: '#DCE2E8'
    }
  },
  axisTick: {
    show: false
  },
  axisLabel: {
    interval: 0,
    textStyle: {
      color: '#556677'
    },
    // 默认x轴字体大小
    fontSize: 12,
    // margin:文字到x轴的距离
    margin: 15
  },
  boundaryGap: false
}
export const seriesObject = {
  name: '今天',
  type: 'line',
  data: [],
  itemStyle: {
    color: '#20C578'
  },
  symbolSize: 10,
  symbol: 'circle',
  smooth: true,
  yAxisIndex: 0,
  showSymbol: true,
  lineStyle: {
    width: 5,
    color: '#000'
  }
}
