<template>
  <div class="card">
    <el-row type="flex"
            class="row-bg"
            justify="space-between">
      <el-col :span="5"
              v-for="item in cardData"
              :key="item.contentValue">
        <el-card class="box-card"
                 shadow="never">
          <div slot="header"
               class="clearfix">
            <span>{{item.title}}</span>
            <span style="padding-left:5px;">
              <el-tooltip class="item"
                          effect="dark"
                          :content="item.info"
                          placement="right-end">
                <i class="el-icon-info"></i>
              </el-tooltip>
            </span>
          </div>
          <div class="content">
            <div class="content-top">
              <b>34543</b>
            </div>
            <div>
              <b> {{item.contentTitle}} </b>
              <span style="padding:0px 15px;"> {{item.Proportion}} </span>
              <span>
                <i class="el-icon-top-right"></i>
              </span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { Row, Col, Card, Tooltip, Icon } from 'element-ui'
export default {
  name: 'Card',
  props: {
    cardData: {
      type: Array,
      default: () => [
        {
          title: '签约门店总数',
          info: '我是提示内容',
          contentValue: 6978,
          contentTitle: '同比上周',
          Proportion: '1.6%',
          background: '43'
        }, {
          title: '签约门店总数',
          info: '我是提示内容',
          contentValue: 6978,
          contentTitle: '同比上周',
          Proportion: '1.6%',
          background: '43'
        }, {
          title: '签约门店总数',
          info: '我是提示内容',
          contentValue: 6978,
          contentTitle: '同比上周',
          Proportion: '1.6%',
          background: '43'
        }, {
          title: '签约门店总数',
          info: '我是提示内容',
          contentValue: 6978,
          contentTitle: '同比上周',
          Proportion: '1.6%',
          background: '43'
        }
      ]
    }
  },
  components: {
    'el-col': Col,
    'el-row': Row,
    'el-card': Card,
    I: Icon,
    'el-tooltip': Tooltip
  }
}
</script>
<style lang="less" scoped >
.card {
  padding: 20px 0px;
}
.box-card {
  .content-top {
    text-align: center;
    margin-bottom: 20px;
  }
}
/deep/ .el-card__header {
  padding: 10px 20px;
}
</style>
