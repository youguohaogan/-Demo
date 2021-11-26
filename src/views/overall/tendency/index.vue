<template>
  <div>
    <Header></Header>
    <div class="line-container">
      <div class="search-container">
        <el-radio-group v-model="dateType">
          <el-radio-button label="最近30天"></el-radio-button>
          <el-radio-button label="最近7天"></el-radio-button>
        </el-radio-group>
        <span>选择时间：</span>
        <el-date-picker
          v-model="searchTime"
          type="daterange"
          range-separator="至"
          picker-options="pickerOptions"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        />
      </div>
      <TendencyLine title="成交套数趋势"> </TendencyLine>
    </div>
    <div class="line-container">
      <el-row :gutter="20">
        <el-col :span="12">
          <TendencyLine title="楼盘上线趋势"> </TendencyLine>
        </el-col>
        <el-col :span="12">
          <TendencyLine title="楼盘动销趋势"> </TendencyLine>
        </el-col>
      </el-row>
    </div>
    <div class="line-container">
      <el-row :gutter="20">
        <el-col :span="12">
          <TendencyLine title="会员活跃趋势"> </TendencyLine>
        </el-col>
        <el-col :span="12">
          <TendencyLine title="用户日活趋势"> </TendencyLine>
        </el-col>
      </el-row>
    </div>
    <div class="line-container">
      <TendencyTable title="推荐、到访、成交转化趋势"></TendencyTable>
    </div>
  </div>
</template>

<script>
import { RadioGroup, RadioButton, DatePicker, Row, Col } from 'element-ui'
export default {
  components: {
    Header: () => import('./components/header.vue'),
    TendencyLine: () => import('./components/tendency-line.vue'),
    TendencyTable: () => import('./components/tendency-table.vue'),
    'el-radio-group': RadioGroup,
    'el-radio-button': RadioButton,
    'el-date-picker': DatePicker,
    'el-row': Row,
    'el-col': Col
  },
  data() {
    return {
      dateType: '最近30天',
      searchTime: null,
      pickerOptions: {
        disableDate(time) {
          return time.getTime() > Date.now()
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.line-container {
  margin-top: 20px;
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;
  .el-row .el-col:nth-child(2) {
    border-left: solid 1px #d9d9d9;
  }
}
.search-container {
  text-align: right;
  color: #999;
  font-size: 14px;

  span {
    margin: 0 5px 0 15px;
  }
}
</style>
