<template>
  <div class="index-tendency">
    <div class="chart-tab">
      {{ title }}
    </div>
    <div class="chart-content">
      <div class="types"></div>
      <line-chart :series="series" :xAxis="xAxis" :legend="legend"></line-chart>
    </div>
  </div>
</template>
<script>
import { series, xAxisCopy, legends } from '@/utils/mock'
// import { RadioGroup, RadioButton } from 'element-ui'
import LineChart from '@/components/line-chart/index.vue'
export default {
  name: 'IndexLine',
  components: {
    LineChart
    // 'el-radio-group': RadioGroup,
    // 'el-radio-button': RadioButton
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      xAxis: [xAxisCopy], // line-chart x轴数据
      series: series, // line-chart series数据
      legend: { data: legends, top: top },
      lineType: '全局',
      dataType: '推荐数'
    }
  }
}
</script>
<style lang="less" scoped>
.index-tendency {
  background: #fff;
  border-radius: 8px;
  padding: 15px;
}
.chart-tab {
  height: 40px;
  font-size: 20px;
  font-weight: 600;
}
.chart-content {
  height: 450px;
  padding-bottom: 32px;
  .types {
    position: relative;
    font-size: 14px;
    color: #303133;
    border-radius: 4px;
    .data-types {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
}
</style>
