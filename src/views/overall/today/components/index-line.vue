<template>
  <div class="index-tendency">
    <div class="chart-tab">
      分时趋势
    </div>
    <div class="chart-content">
      <div class="types">
        <!-- <span class="checked"> 全局</span>
        <span>恒大楼盘</span>
        <span>外部楼盘</span>
        <span>个人会员</span>
        <span>机构会员</span> -->
        <el-radio-group v-model="lineType">
          <el-radio-button label="全局"></el-radio-button>
          <el-radio-button label="恒大楼盘"></el-radio-button>
          <el-radio-button label="外部楼盘"></el-radio-button>
          <el-radio-button label="个人会员"></el-radio-button>
          <el-radio-button label="机构会员"></el-radio-button>
        </el-radio-group>
        <el-radio-group class="data-types" v-model="dataType">
          <el-radio-button label="推荐数"></el-radio-button>
          <el-radio-button label="到访数"></el-radio-button>
          <el-radio-button label="成交客数"></el-radio-button>
          <el-radio-button label="成交金额"></el-radio-button>
          <el-radio-button label="客均价格"></el-radio-button>
        </el-radio-group>
      </div>
      <line-chart :series="series" :xAxis="xAxis" :legend="legend"></line-chart>
    </div>
  </div>
</template>
<script>
import { series, xAxisCopy, legends } from '@/utils/mock'
import { RadioGroup, RadioButton } from 'element-ui'
import LineChart from '@/components/line-chart/index.vue'
export default {
  name: 'IndexLine',
  components: {
    LineChart,
    'el-radio-group': RadioGroup,
    'el-radio-button': RadioButton
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
  margin-top: 20px;
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
