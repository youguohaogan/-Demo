<template>
  <div class="card">
    <el-row type="flex"
            class="row-bg"
            justify="space-between">
      <el-col :span="3"
              v-for="(item,index) in cardData"
              :key="index">
        <el-card class="box-card"
                 shadow="never">
          <div slot="header"
               class="clearfix">
            <span>{{item.title}}</span>
            <el-tooltip class="item"
                        effect="dark"
                        :content="item.info"
                        placement="right-end">
              <img style=" margin-left: 5px; margin-top: 3px;"
                   src="@/assets/img/base/inof.png"
                   alt="">
            </el-tooltip>
          </div>
          <div class="content">
            <div class="card-number">
              <b>112</b>
              万
            </div>
            <div style="padding-bottom: 16px;">
              <span> {{item.contentTitle}} </span>
              <b> {{item.Proportion}} </b>
              <img src="@/assets/img/base/up.png"
                   alt="">
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { Row, Col, Card, Tooltip } from 'element-ui'
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
    // i: Icon,
    'el-tooltip': Tooltip
  }
}
</script>
<style lang="less" scoped >
.card {
  padding: 20px 0px;
  height: 148px;
}
.box-card {
  .content-top {
    margin-bottom: 20px;
  }
  .content {
    .card-number {
      b {
        font-size: 32px;
        font-weight: 600;
        color: #303133;
        // color: #e50010;
      }
      margin: 0 0 16px 0;
    }
    span {
      color: #909399;
    }
  }

  .clearfix {
    span {
      font-size: 16px;
      font-weight: 600;
    }
  }
}
/deep/ .el-card__header {
  padding: 10px 20px;
  border: none;
}
/deep/.el-card__body {
  padding: 0 20px;
}
</style>
