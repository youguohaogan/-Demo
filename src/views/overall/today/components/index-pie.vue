<template>
  <el-col :span="8">
    <div class="today-pie">
      <div class="title-container">
        {{ title }}
        <slot name="rightTools"></slot>
      </div>
      <div class="pie-content">
        <pie-chart :series="pieSeries" :chartOption="pieOption" />
      </div>
    </div>
  </el-col>
</template>
<script>
import { pieOption } from '@/utils/chart/pie'
import { pieData } from '@/utils/mock'
import PieChart from '@/components/pie-chart/index.vue'
import { Col } from 'element-ui'
const copyPieOption = JSON.parse(JSON.stringify(pieOption))
copyPieOption.legend.formatter = name => `${name}  25%  (30000套)`
export default {
  name: 'IndexPie',
  components: {
    'el-col': Col,
    PieChart
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      pieOption: copyPieOption, // pie配置项
      pieSeries: pieData // p
    }
  }
}
</script>
<style lang="less" scoped>
.today-pie {
  background-color: #fff;
  border-radius: 8px;
  margin-top: 15px;
  .title-container {
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    color: #303133;
    font-weight: 600;
    position: relative;
    padding: 0 15px;
    .right-tools {
      position: absolute;
      right: 15px;
      top: 5px;
      font-weight: normal;
      font-size: 14px;
    }
  }
  .pie-content {
    padding-top: 15px;
    height: 200px;
  }
}
</style>
