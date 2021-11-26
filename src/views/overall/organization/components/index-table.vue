<template>
  <el-col>
    <v-table :showPagination="false"
             :tableCol="tableCol"
             :tableData="tableData">
    </v-table>
  </el-col>
</template>
<script>
import { Col } from 'element-ui'
export default {
  name: 'IndexTable',
  components: {
    'el-col': Col,
    'v-table': () => import('@/components/table/index.vue')
  },
  data() {
    return {
      tableCol: [
        {
          prop: 'company',
          label: '日期'
        }, {
          label: '公司',
          prop: 'company'
        }, {
          label: '已签约门店数(个)',
          prop: 'sale'
        }, {
          label: '已过股门店数',
          prop: 'coefficient'
        }, {
          label: '已过股率',
          prop: 'coefficient'
        }, {
          label: '累计签约新开门店',
          prop: 'coefficient'
        }, {
          label: '新开门店累计开业',
          prop: 'coefficient'
        }, {
          label: '总经纪人数',
          prop: 'coefficient'
        }, {
          label: 'Saas导入经纪人数',
          prop: 'coefficient'
        }, {
          label: 'Saas活跃度',
          prop: 'coefficient'
        }, {
          label: 'Saas平台交易金额(近30天)',
          prop: 'coefficient'
        }, {
          label: '30天人效',
          prop: 'coefficient'
        }
      ],
      tableData: [
        {
          company: '珠三角公司',
          sale: 3000,
          coefficient: '2.6%'
        }, {
          company: '珠三角公司',
          sale: 3000,
          coefficient: '2.6%'
        }, {
          company: '珠三角公司',
          sale: 3000,
          coefficient: '2.6%'
        }, {
          company: '珠三角公司',
          sale: 3000,
          coefficient: '2.6%'
        }, {
          company: '珠三角公司',
          sale: 3000,
          coefficient: '2.6%'
        }, {
          company: '珠三角公司',
          sale: 3000,
          coefficient: '2.6%'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.table-h2 {
  line-height: 40px;
}
</style>
