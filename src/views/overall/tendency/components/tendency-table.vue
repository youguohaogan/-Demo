<template>
  <div>
    <h2 class="table-h2">
      {{ title }}
      <div class="right-tools">
        <el-radio-group v-model="tableType">
          <el-radio-button label="当天"></el-radio-button>
          <el-radio-button label="3日"></el-radio-button>
          <el-radio-button label="7日"></el-radio-button>
        </el-radio-group>
      </div>
    </h2>
    <v-table
      :showPagination="false"
      :tableCol="tableCol"
      border
      :tableData="tableData"
    >
    </v-table>
  </div>
</template>
<script>
import { RadioGroup, RadioButton } from 'element-ui'

export default {
  name: 'IndexTable',
  components: {
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
          label: '',
          prop: 'title'
        },
        {
          label: '6.1',
          prop: '1'
        },
        {
          label: '6.2',
          prop: '2'
        },
        { label: '6.2', prop: '3' },
        { label: '6.2', prop: '4' },
        { label: '6.2', prop: '5' },
        { label: '6.2', prop: '6' },
        { label: '6.2', prop: '7' }
      ],
      tableData: [
        {
          title: '推荐人数',
          1: '100%',
          2: '100%',
          3: '2.6%',
          4: '2.6%',
          5: '2.6%',
          6: '2.6%',
          7: '2.6%'
        },
        {
          title: '到访人数',
          1: '100%',
          2: '100%',
          3: '2.6%',
          4: '2.6%',
          5: '2.6%',
          6: '2.6%'
        },
        {
          title: '成交人数',
          1: '100%',
          2: '100%',
          3: '2.6%',
          4: '2.6%',
          5: '2.6%',
          6: '2.6%'
        }
      ],
      tableType: '7日'
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
