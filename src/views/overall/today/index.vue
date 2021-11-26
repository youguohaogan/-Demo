<template>
  <div class="today">
    <!--关键指标-->
    <index-pivotal />
    <!--折线图-->
    <index-line />
    <el-row :gutter="20">
      <!--饼状图-->
      <index-pie title="成交楼盘结构">
        <template v-slot:rightTools>
          <el-radio-group class="right-tools" v-model="buildingPieType">
            <el-radio-button label="套数"></el-radio-button>
            <el-radio-button label="金额"></el-radio-button>
          </el-radio-group>
        </template>
      </index-pie>
      <index-pie title="楼盘动销情况">
        <template v-slot:rightTools>
          <el-radio-group class="right-tools" v-model="salePieType">
            <el-radio-button label="楼盘数"></el-radio-button>
            <el-radio-button label="金额"></el-radio-button>
          </el-radio-group>
        </template>
      </index-pie>
      <index-pie title="成交来源结构">
        <template v-slot:rightTools>
          <el-radio-group class="right-tools" v-model="sourcePieType">
            <el-radio-button label="套数"></el-radio-button>
            <el-radio-button label="金额"></el-radio-button>
          </el-radio-group>
        </template>
      </index-pie>
    </el-row>
    <div class="clear"></div>
    <div class="table-container">
      <h2>地区公司排名</h2>
      <el-row :gutter="20">
        <index-table title="成交排名" :showTypes="true"> </index-table>
        <index-table title="推荐到访排名" />
      </el-row>
    </div>
    <div class="table-container">
      <h2>会员管理部排名</h2>
      <el-row :gutter="20">
        <index-table title="成交排名" :showTypes="true" />
        <index-table title="推荐到访排名" />
      </el-row>
    </div>
  </div>
</template>
<script>
import { Row, RadioGroup, RadioButton } from 'element-ui'
export default {
  name: 'Today',
  components: {
    'index-pivotal': () => import('./components/pivotal.vue'),
    'index-table': () => import('./components/index-table.vue'),
    'index-pie': () => import('./components/index-pie.vue'),
    'index-line': () => import('./components/index-line.vue'),
    'el-row': Row,
    'el-radio-group': RadioGroup,
    'el-radio-button': RadioButton
  },
  data() {
    return {
      salePieType: '楼盘数',
      sourcePieType: '套数',
      buildingPieType: '套数'
    }
  }
}
</script>
<style lang="less" scoped>
.chart-tab {
  height: 50px;
  background: #f2f2f2;
}
.el-row {
  overflow: hidden;
  margin-bottom: 10px;
}
.table-container {
  background-color: #fff;
  border-radius: 8px;
  padding: 15px;
  margin-top: 20px;
  h2 {
    font-size: 20px;
    color: #303133;
    font-weight: 600;
  }
  .el-row .el-col:first-child {
    position: relative;
    &:first-child::before {
      content: '';
      position: absolute;
      background-color: #d9d9d9;
      width: 1px;
      top: 12px;
      right: 0;
      bottom: 0;
      z-index: 10;
    }
  }
}

.right-tools {
  position: absolute;
  right: 15px;
  top: 5px;
  border-radius: 4px;
}
</style>
