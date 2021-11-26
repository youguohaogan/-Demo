<template>
  <div>
    <div class="head">
      <Condition @conditionSubmit="conditionSubmit" />
    </div>

    <div class="content-chart">
      <div class="title">
        分时趋势
      </div>
      <div class="chart">
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
// import { CheckboxGroup, CheckboxButton, Tooltip } from 'element-ui'
import { series, xAxisCopy } from '@/utils/mock'
import LineChart from '@/components/line-chart/index.vue'
export default {
  components: {
    LineChart,
    Condition: () => import('@/components/condition/index.vue'),
    'v-table': () => import('@/components/table/index.vue')
  },
  data() {
    return {
      xAxis: [xAxisCopy], // line-chart x轴数据
      series: series, // line-chart series数据
      groupData: [
        {
          title: '会员大类',
          disabled: false,
          checkboxGroup1: ['个人会员'],
          value: ['个人会员', '机构会员']
        },
        {
          title: '时间周期',
          disabled: false,
          checkboxGroup1: ['7'],
          value: ['7', '14', '30', '自定义']
        },
        {
          title: '会员细分',
          disabled: false,
          checkboxGroup1: ['员工'],
          value: [
            '员工',
            '拓客',
            '老业主',
            '精英汇会员',
            '发展会员',
            '其他个人会员',
            '直营门店',
            '合作公司',
            '并购公司',
            '合作公司新开门店',
            '合作公司并购门店',
            '其他机构会员'
          ]
        }
      ],
      tableCol: [
        {
          prop: 'company',
          label: '日期'
        },
        {
          label: '公司',
          prop: 'company'
        },
        {
          label: '会员大类',
          prop: 'sale'
        },
        {
          label: '会员细分',
          prop: 'coefficient'
        },
        {
          prop: 'company',
          label: '累计会员总数'
        },
        {
          label: '30天活跃会员数',
          prop: 'company'
        },
        {
          label: '当日新增',
          prop: 'sale'
        },
        {
          label: '当日活跃',
          prop: 'coefficient'
        },
        {
          label: '当日推荐数',
          prop: 'company'
        },
        {
          label: '当日到访数',
          prop: 'sale'
        },
        {
          label: '当日成交套数',
          prop: 'coefficient'
        },
        {
          label: '当日成交笔数',
          prop: 'coefficient'
        },
        {
          label: '当日有推荐会员数',
          prop: 'company'
        },
        {
          label: '当日有到访会员数',
          prop: 'sale'
        },
        {
          label: '当日有成交会员数',
          prop: 'coefficient'
        },
        {
          label: '30天会员平均成交',
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
.head {
  background: #fff;
  height: 174px;
  padding: 16px;
}
.chart-tab {
  height: 50px;
  background: #f2f2f2;
}
.content-chart {
  height: 415px;
  margin: 16px 0;
  padding: 16px;
  background: #fff;
  .chart {
    height: 410px;
  }
}

.condition {
  padding-top: 20px;
  span {
    line-height: 40px;
    font-weight: 600;
    padding-right: 20px;
    padding-left: 50px;
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
