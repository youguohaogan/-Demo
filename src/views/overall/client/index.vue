<template>
  <div class="client">
    <div class="head">
      <h2 class="title">数据趋势</h2>
      <div style="height:200px">
        <el-card @cardValue="cardValue" />
      </div>
      <div class="chart-content">
        <line-chart :series="series"
                    :chartOption="options"
                    :xAxis="xAxis"></line-chart>
      </div>
    </div>

    <el-row type="flex"
            class="row-bg"
            justify="space-between">
      <el-col :span="8"
              class="funnel">
        <label class="title">
          活跃用户转化率
          <span>/3日转化</span>
        </label>
        <div style="height: 280px;">
          <funnel-chart />
        </div>
      </el-col>
      <el-col :span="16"
              class="trend-chart">
        <div>
          <p class="title">趋势分析
            <span>/30天</span>
          </p>
          <el-radio-group size="small"
                          style="margin: 16px 0;"
                          v-model="radio1">
            <el-radio-button label="推荐到访率"></el-radio-button>
            <el-radio-button label="推荐成交率"></el-radio-button>
          </el-radio-group>
          <el-radio-group size="small"
                          style="float: right;margin: 16px 0;"
                          v-model="radio2">
            <el-radio-button label="当天"></el-radio-button>
            <el-radio-button label="3日"></el-radio-button>
            <el-radio-button label="7日"></el-radio-button>
          </el-radio-group>
        </div>
        <div style="height: 230px;">
          <line-chart :series="series2"
                      :xAxis="xAxis2"></line-chart>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { series, xAxisCopy } from '@/utils/mock'
import LineChart from '@/components/line-chart/index.vue'
import { lineOptions } from '@/utils/chart/line'

import { Row, Col, RadioGroup, RadioButton } from 'element-ui'

export default {
  nsme: 'Client',
  components: {
    LineChart,
    'el-row': Row,
    'el-col': Col,
    'el-radio-group': RadioGroup,
    'el-radio-button': RadioButton,
    'el-card': () => import('./components/index.vue'),
    'funnel-chart': () => import('@/components/funnel-chart/index.vue')
  },
  data() {
    return {
      radio1: '推荐到访率',
      radio2: '当天',
      options: {},
      xAxis: [xAxisCopy], // line-chart x轴数据
      series: {}, // line-chart series数据
      xAxis2: [xAxisCopy], // line-chart x轴数据
      series2: series // line-chart series数据
    }
  },
  created() {
    const data = JSON.parse(JSON.stringify(lineOptions))
    delete data.legend.bottom
    data.legend.top = 0
    data.legend.right = '7%'
    data.grid.bottom = '13%'
    data.grid.top = '15%'
    this.options = data
    this.series = JSON.parse(JSON.stringify(series))
    this.series.map((val) => {
      return Object.assign(val, {
        symbolSize: 2,
        smooth: false,
        lineStyle: {
          width: 2

        }
      })
    })

    console.log(data)

    console.log(this.xAxis, this.series)
  },
  methods: {
    cardValue(value) {
      console.log(value, '传值卡片的数据')
    }
  }
}
</script>
<style lang="less" scoped>
.client {
  .head {
    height: 582px;
    padding: 16px;
    background: #ffffff;
  }
  .funnel {
    max-width: 562px;
    padding: 16px;
    height: 350px;
    background: #fff;
  }
  .trend-chart {
    background: #fff;
    padding: 16px;
    height: 350px;
  }
}
.title {
  font-weight: 600;
  font-size: 20px;
  color: #303133;
  span {
    font-size: 14px;
    color: #909399;
  }
}
// .table-h2 {
//   line-height: 10px;
//   font-weight: 600;
//   font-size: 20px;
//   margin: 20px 0px 12px 0px;
// }
.chart-content {
  margin-top: 40px;
  height: 330px;
}
.row-bg {
  margin-top: 20px;
}
/deep/ .el-radio-button__orig-radio:checked + .el-radio-button__inner {
  background-color: #fff;
  color: #d80c18;
}
</style>
