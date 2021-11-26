<template>
  <div class="funnel-chart"
       ref="funnel-chart">
  </div>
</template>
<script>
import * as echarts from 'echarts/core'
// 引入柱状图图表，图表后缀都为 Chart
import { FunnelChart } from 'echarts/charts'
// 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import {
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  GridComponent
} from 'echarts/components'
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { SVGRenderer } from 'echarts/renderers'
// import { lineOptions, xAxis } from '@/utils/chart/line'
// 注册必须的组件
echarts.use([TitleComponent, TooltipComponent, GridComponent, FunnelChart, SVGRenderer, LegendComponent])
// var url = 'https://q.cnblogs.com/Images/qdigg.gif'
var colors = ['#f36119', '#ff9921', '#20c8ff', '#2cb7ff', '#1785ef']
export default {
  name: 'FunnelChart',
  props: {
    series: {
      type: Array,
      default: () => [
        {
          top: '10%',
          type: 'funnel',
          left: '28%',
          width: '40%',
          height: '90%',
          gap: 16,
          minSize: 60,
          maxSize: 210,
          label: {
            show: true,
            position: 'inside',
            formatter: '{b}  ({c}万)'
          },
          data: [
            { value: 60, name: '意向' },
            { value: 40, name: '方案' },
            { value: 10, name: '商务' }

          ]
        },

        {
          top: '10%',
          type: 'funnel',
          left: '50%',
          width: '10%',
          height: '90%',
          gap: 16,
          z: 1,
          minSize: 20,
          maxSize: 50,
          label: {
            normal: {
              color: '#000000',
              position: 'right',
              // backgroundColor: '#f6f7fc',
              borderColor: '#394B97',
              borderWidth: 1,
              borderRadius: 4,
              padding: [11, 25, 11, 25],
              width: 40,
              formatter: function (d) {
                // var ins = '{aa|}' + d.percent
                console.log(d)
                return 'ins'
              }
              // rich: {
              //   aa: {
              //     backgroundColor: {
              //       // image: url,
              //       padding: [1, 2, 3, 4]

              //     },
              //     width: 4,
              //     height: 9,
              //     align: 'center',
              //     padding: [0, 0, 0, 0]
              //   }
              // }

            }

          },
          // 右侧的百分比显示的地方
          labelLine: {
            show: true,
            normal: {
              length: 100,
              position: 'right',
              lineStyle: {
                width: 1,
                color: '#e8e9f1',
                type: 'solid'

              }
            }

          },
          // 主体是透明的
          itemStyle: {
            normal: {
              color: 'transparent',
              borderWidth: 0,
              opacity: 1
            }
          },
          data: [
            { value: 60, name: '意向' },
            { value: 40, name: '方案' },
            { value: 20, name: '商务' }

          ]
        },

        {
          top: '10%',
          type: 'funnel',
          right: '80%',
          width: '50%',
          height: '90%',
          gap: 16,
          z: 1,
          minSize: 20,
          maxSize: 50,
          label: {
            normal: {
              color: '#000000',
              position: 'left',
              borderWidth: 1,
              borderRadius: 4,
              padding: [11, 25, 11, 25],
              width: 40,
              /* formatter:function(d){
                        var ins='{aa|}'+d.percent;
                        console.log(ins)
                        return ins

                    },*/
              rich: {
                aa: {
                  backgroundColor: {
                    // image: url,
                    padding: [1, 2, 3, 4]

                  },
                  width: 4,
                  height: 9,
                  align: 'center',
                  padding: [0, 0, 0, 0]
                }
              }

            }

          },
          // 右侧的百分比显示的地方
          labelLine: {
            show: true,
            normal: {
              length: 100,
              position: 'right',
              lineStyle: {
                width: 1,
                color: '#e8e9f1',
                type: 'solid'

              }
            }

          },
          // 主体是透明的
          itemStyle: {
            normal: {
              color: 'transparent',
              borderWidth: 0,
              opacity: 1
            }
          },
          data: [
            { value: 60, name: '意向' },
            { value: 40, name: '方案' },
            { value: 20, name: '商务' }

          ]
        }
      ]
    },

    chartOption: {
      type: Object,
      default: () => {
        return {
          // title: {
          //   text: ''
          // },

          backgroundColor: '#ffffff',
          color: colors,
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: 'red'
              },
              lineStyle: {
                color: '#9eb2cb'
              }
            }
          },

          legend: {
            show: false,
            top: 'top',
            left: '2%',
            textStyle: {
              color: '#000'
            },
            itemHeight: 2,
            data: ['意向', '方案', '商务', '即将成交', '赢单']
          },
          grid: {
            top: 24,
            left: '2%',
            right: 20,
            bottom: 30,
            containLabel: true,
            borderWidth: 0.5
          }
        }
      }
    }
    // xAxis: {
    //   type: Array,
    //   default: () => {
    //     return [xAxis]
    //   }
    // }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.renderChart()
    window.onresize = () => {
      this.chart && this.chart.resize()
    }
  },
  methods: {
    renderChart() {
      const doms = this.$refs['funnel-chart']
      if (!doms) return
      if (!this.chart) { this.chart = echarts.init(doms) }
      this.chart.setOption(this.getOptions())
    },
    getOptions() {
      const option = {
        backgroundColor: '#fff',
        xAxis: this.xAxis,
        series: this.series
      }
      return Object.assign(option, this.chartOption)
    }
  }
}
</script>
<style lang="less" scoped>
.funnel-chart {
  height: 100%;
}
</style>
