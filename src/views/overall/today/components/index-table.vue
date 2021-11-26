<template>
  <el-col :span="12">
    <div>
      <h2 class="table-h2">
        {{ title }}
        <div class="right-tools">
          <em>筛选:</em
          ><el-select v-model="tradeRank">
            <el-option
              v-for="item in selects"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            >
            </el-option>
          </el-select>
          <!-- <span v-if="showTypes" class="checked">套数</span>
          <span v-if="showTypes">金额</span> -->
          <el-radio-group v-if="showTypes" v-model="tableType">
            <el-radio-button label="套数"></el-radio-button>
            <el-radio-button label="金额"></el-radio-button>
          </el-radio-group>
        </div>
      </h2>
      <v-table
        :showPagination="false"
        :tableCol="tableCol"
        :tableData="tableData"
      >
      </v-table>
    </div>
  </el-col>
</template>
<script>
import { Col, Select, Option, RadioGroup, RadioButton } from 'element-ui'

export default {
  name: 'IndexTable',
  components: {
    'el-col': Col,
    'el-select': Select,
    'el-option': Option,
    'el-radio-group': RadioGroup,
    'el-radio-button': RadioButton,
    'v-table': () => import('@/components/table/index.vue')
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    showTypes: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tableCol: [
        {
          type: 'index',
          label: '排名'
        },
        {
          label: '地区公司',
          prop: 'company'
        },
        {
          label: '推荐成交套数',
          prop: 'sale'
        },
        {
          label: '综合系数',
          prop: 'coefficient'
        }
      ],
      tableData: [
        {
          company: '珠三角公司',
          sale: 3000,
          coefficient: '2.6%'
        },
        {
          company: '珠三角公司',
          sale: 3000,
          coefficient: '2.6%'
        },
        {
          company: '珠三角公司',
          sale: 3000,
          coefficient: '2.6%'
        },
        {
          company: '珠三角公司',
          sale: 3000,
          coefficient: '2.6%'
        },
        {
          company: '珠三角公司',
          sale: 3000,
          coefficient: '2.6%'
        },
        {
          company: '珠三角公司',
          sale: 3000,
          coefficient: '2.6%'
        }
      ],
      selects: [
        { value: '1', label: '前六' },
        { value: '2', label: '后六' }
      ],
      tradeRank: '1',
      tableType: '套数'
    }
  }
}
</script>
<style lang="less" scoped>
.table-h2 {
  display: relative;
  line-height: 40px;
  font-weight: 600;
  font-size: 16px;
  color: #303133;
  margin-bottom: 10px;
}
.right-tools {
  position: absolute;
  right: 15px;
  top: 0;
  border-radius: 4px;
  em {
    font-size: 14px;
    margin-right: 10px;
  }
  .el-select {
    margin-right: 20px;
  }
  span {
    display: inline-block;
    height: 32px;
    width: 52px;
    text-align: center;
    font-size: 14px;
    font-weight: normal;
    line-height: 32px;
    border: solid 1px #d9d9d9;
    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    &.checked {
      border-color: #e50010;
      color: #e50010;
    }
  }
}
</style>
