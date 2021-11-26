<template>
  <div class="house">
    <div class="condition">
      <Condition @conditionSubmit="conditionSubmit" />
    </div>
    <div class="index-tendency">
      <div class="title">
        指标趋势
      </div>
      <div>
        <el-button-group style="padding-top: 16px;">
          <el-button plain
                     size="mini">
            在线楼盘数
          </el-button>
          <el-button plain
                     size="mini">
            新上楼数盘
          </el-button>
          <el-button plain
                     size="mini">
            楼盘动销率
          </el-button>
          <el-button plain
                     size="mini">
            楼盘7日动销率
          </el-button>
        </el-button-group>
      </div>
      <div class="chart-content">
        <line-chart :series="series"
                    :xAxis="xAxis"></line-chart>
      </div>
    </div>

    <div>
      <v-table :showPagination="false"
               :tableCol="tableCol"
               :tableData="tableData">
      </v-table>
    </div>
  </div>
</template>
<script>
import {
  // Checkbox,
  // CheckboxGroup,
  // RadioGroup,
  // RadioButton,
  // Tooltip,
  ButtonGroup,
  Button
} from 'element-ui'
import { series, xAxisCopy } from '@/utils/mock'
import LineChart from '@/components/line-chart/index.vue'
export default {
  name: 'House',
  components: {
    LineChart,
    // 'el-tooltip': Tooltip,
    'el-button-group': ButtonGroup,
    'el-button': Button,
    // 'el-radio-group': RadioGroup,
    // 'el-radio-button': RadioButton,
    // 'el-checkbox': Checkbox,
    // 'el-checkbox-group': CheckboxGroup,
    Condition: () => import('@/components/condition/index.vue'),
    'v-table': () => import('@/components/table/index.vue')
  },
  data() {
    return {
      xAxis: [xAxisCopy], // line-chart x轴数据
      series: series, // line-chart series数据

      tableCol: [
        {
          prop: 'company',
          label: '数据日期'
        },
        {
          label: '地区公司',
          prop: 'company'
        },
        {
          label: '机构类型',
          prop: 'sale'
        },
        {
          label: '机构名称',
          prop: 'coefficient'
        },
        {
          prop: 'company',
          label: '上新日期'
        },
        {
          label: '物业类型',
          prop: 'company'
        },
        {
          label: '楼盘类型',
          prop: 'sale'
        },
        {
          label: '在线楼盘数',
          prop: 'coefficient'
        },
        {
          label: '新增楼盘数',
          prop: 'company'
        },
        {
          label: '有销售楼盘数',
          prop: 'sale'
        },
        {
          label: '销售套数',
          prop: 'coefficient'
        },
        {
          label: '销售金额(万)',
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
      ]
    }
  },
  methods: {
    conditionSubmit(val) {
      console.log(val, '筛选的条件传值的数')
    }
  }
}
</script>
<style lang="less" scoped>
.house {
  // padding: 10px;
  .condition {
    height: 255px;
    padding: 16px;
    background: #fff;
    // margin-bottom: 80px;
  }
  .chart-content {
    height: 350px;
  }
  .index-tendency {
    padding: 16px;
    margin: 12px 0;
    height: 415px;
    background: #fff;
  }
}
.title {
  font-weight: 600;
  font-size: 20px;
  color: #303133;
}
.float {
  float: left;
}
</style>
