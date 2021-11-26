<template>
  <div class="line-chart"
       ref="lin-chart">
  </div>
</template>
<script>
import * as echarts from 'echarts/core'
// 引入柱状图图表，图表后缀都为 Chart
import { LineChart } from 'echarts/charts'
// 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import {
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  GridComponent
} from 'echarts/components'
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { SVGRenderer } from 'echarts/renderers'
import { lineOptions, xAxis } from '@/utils/chart/line'
// 注册必须的组件
echarts.use([TitleComponent, TooltipComponent, GridComponent, LineChart, SVGRenderer, LegendComponent])
export default {
  name: 'LineChart',
  props: {
    series: {
      type: Array,
      default: () => []
    },
    chartOption: {
      type: Object,
      default: () => {
        return lineOptions
      }
    },
    xAxis: {
      type: Array,
      default: () => {
        return [xAxis]
      }
    }
  },
  data () {
    return {
      chart: null
    }
  },
  mounted () {
    this.renderChart()
    window.onresize = () => {
      this.chart && this.chart.resize()
    }
  },
  methods: {
    renderChart () {
      const doms = this.$refs['lin-chart']
      if (!doms) return
      if (!this.chart) { this.chart = echarts.init(doms) }
      this.chart.setOption(this.getOptions())
    },
    getOptions () {
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
.line-chart {
  height: 100%;
}
</style>
