<template>
  <div class="pie-chart" ref="pie-chart"></div>
</template>
<script>
import * as echarts from 'echarts/core'
// 引入柱状图图表，图表后缀都为 Chart
import { PieChart } from 'echarts/charts'
// 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import {
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  GridComponent
} from 'echarts/components'
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { SVGRenderer } from 'echarts/renderers'
import { pieOption, pieSeries } from '@/utils/chart/pie'
// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  PieChart,
  SVGRenderer,
  LegendComponent
])
export default {
  name: 'BarChart',
  props: {
    chartOption: {
      type: Object,
      default: () => pieOption
    },
    series: {
      type: Array,
      default: () => [pieSeries]
    }
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
  beforeDestroy() {
    window.removeEventListener('resize')
  },
  methods: {
    renderChart() {
      const doms = this.$refs['pie-chart']
      if (!doms) return
      if (!this.chart) {
        this.chart = echarts.init(doms)
      }
      this.chart.setOption(this.getOptions())
    },
    getOptions() {
      const option = { series: this.series }
      return Object.assign(option, this.chartOption)
    }
  }
}
</script>
<style lang="less" scoped>
.pie-chart {
  width: 100%;
  height: 100%;
}
</style>
