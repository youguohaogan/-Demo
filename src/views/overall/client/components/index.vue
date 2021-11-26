<template>
  <div class="card">
    <el-col :span="8"
            v-for="item in cardData"
            :key="item.title">
      <div @click="cardEven(item)">
        <el-card class="box-card"
                 :style="cardBooder(item)"
                 shadow="never">
          <div slot="header"
               class="clearfix">
            <span class="card-title">{{item.title}}</span>
          </div>
          <div class="content">
            <div class="content-left">
              <div>
                <b>恒大</b>
                <span style="padding-left:5px;">
                  <el-tooltip class="item"
                              effect="dark"
                              content="item.info"
                              placement="right-end">
                    <img src="@/assets/img/base/inof.png"
                         alt="">
                  </el-tooltip>
                </span>
              </div>
              <div class="card-number">
                <b>112</b>
                万
              </div>
              <div>
                <span>同比上周 </span>
                <b>15%</b>
                <img src="@/assets/img/base/up.png"
                     alt="">
              </div>
            </div>
            <div style=" float: left;width: 1px; height: 100px; background: #D9D9D9;"></div>
            <div class="content-right">
              <div>
                <b>恒大</b>
                <span style="padding-left:5px;">
                  <el-tooltip class="item"
                              effect="dark"
                              content="te"
                              placement="right-end">
                    <img src="@/assets/img/base/inof.png"
                         alt="">
                  </el-tooltip>
                </span>
              </div>
              <div class="card-number">
                <b>112</b>
                万
              </div>
              <div>
                <span>同比上周 </span>
                <b>15%</b>
                <img src="@/assets/img/base/up.png"
                     alt="">
              </div>
            </div>
          </div>
        </el-card>
      </div>
    </el-col>
  </div>
</template>
<script>
import { Col, Card, Tooltip } from 'element-ui'
export default {
  name: 'Card',
  props: {
    cardData: {
      type: Array,
      default: () => [
        {
          title: '签约门店总数2',
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
          title: '签约门店总数3',
          info: '我是提示内容',
          contentValue: 6978,
          contentTitle: '同比上周',
          Proportion: '1.6%',
          background: '43'
        }
      ]
    }
  },
  data() {
    return {
      isBooder: null
    }
  },
  components: {
    'el-col': Col,
    'el-card': Card,
    // i: Icon,
    'el-tooltip': Tooltip
  },
  computed: {
    cardBooder() {
      return (data) => {
        if (this.isBooder === data.title) {
          return 'border: 1px solid #e50010;'
        }
        return ''
      }
    }
  },
  methods: {
    cardEven(data) {
      this.isBooder = data.title
      this.$emit('cardValue', data)
      // console.log(data)
    }
  }
}
</script>
<style lang="less" scoped >
.card {
  padding: 20px 0px;
  height: 100%;
  width: 100%;
}
.box-card {
  height: 188px;
  span {
    color: #909399;
  }
  .card-title {
    font-weight: 600;
    color: #303133;
    font-size: 16px;
  }
  .card-number {
    b {
      font-size: 32px;
      font-weight: 600;
      color: #303133;
      // color: #e50010;
    }
    margin: 4px 0 16px 0;
  }
  .content-left {
    margin-bottom: 20px;
    width: 50%;
    float: left;
    img {
      margin-top: 2px;
    }
  }
  .content-right {
    margin-left: 20px;
    float: left;
    img {
      margin-top: 2px;
    }
  }
}
/deep/ .el-card__header {
  background: #f5f5f5;
  padding: 10px 20px;
  height: 48px;
  border: none;
  line-height: 30px;
}
</style>
