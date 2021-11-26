<template>
  <div class="real-index">
    昨日关键指标 <i class="el-icon el-icon-warning-outline"></i>
    <div class="main-container">
      <div
        v-for="item in keyData"
        :key="item.title"
        @mouseenter="item.popVisible = true"
        @mouseleave="item.popVisible = false"
      >
        <!-- <el-popover width="300" placement="top" v-model="item.popVisible">
          <div class="pop-container">
            <div>
              <h2>恒大</h2>
              <p>今日累计<span>53.1万</span></p>
              <p>昨日此时<span>53.1万</span></p>
              <p>上周此时<span>53.1万</span></p>
            </div>
            <div>
              <h2>外部</h2>
              <p>今日累计<span>53.1万</span></p>
              <p>昨日此时<span>53.1万</span></p>
              <p>上周此时<span>53.1万</span></p>
            </div>
          </div>
        </el-popover> -->
        <p class="title">
          {{ item.title }} <i class="el-icon el-icon-warning-outline"></i>
        </p>
        <p class="content">
          {{ item.val }}<span>{{ item.unit }}</span>
        </p>
        <p class="compare-container">
          同步上周 <span class="up">{{ item.compYes }}</span> 30天均值<span
            class="down"
            >{{ item.compWeek }}
          </span>
        </p>
        <el-divider></el-divider>
        <p class="compare-container">
          恒大楼盘 <span>{{ item.compYes }}</span> 同比上周<span class="down"
            >{{ item.compWeek }}
          </span>
        </p>
        <p class="compare-container">
          外部楼盘 <span>{{ item.compYes }}</span> 同比上周<span class="down"
            >{{ item.compWeek }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { Divider } from 'element-ui'
export default {
  name: 'Pivotal',
  components: {
    // 'el-popover': Popover,
    'el-divider': Divider
  },
  props: {
    keyData: {
      type: Array,
      default: () => {
        return [
          {
            title: '累计推荐',
            val: '121',
            unit: '万',
            compYes: '+15%',
            compWeek: '-2.1%',
            popVisible: false
          },
          {
            title: '累计到访',
            val: '121',
            unit: '万',
            compYes: '+15%',
            compWeek: '-2.1%',
            popVisible: false
          },
          {
            title: '累计成交套数',
            val: '2230',
            unit: '套',
            compYes: '+15%',
            compWeek: '-2.1%',
            popVisible: false
          },
          {
            title: '累计成交金额',
            val: '1.1',
            compYes: '+15%',
            unit: '亿',
            compWeek: '-2.1%',
            popVisible: false
          },
          {
            title: '累计成交定金',
            val: '1210',
            compYes: '+15%',
            unit: '套',
            compWeek: '-2.1%',
            popVisible: false
          }
        ]
      }
    }
  },
  data() {
    return {
      visible: false
    }
  }
}
</script>
<style lang="less" scoped>
.real-index {
  // height: 264px;
  background: #fff;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 600;
  padding: 15px;
  i {
    color: #bfbfbf;
    font-size: 14px;
    font-style: normal;
  }
}
.main-container {
  display: flex;
  flex-flow: nowrap;
  margin: 15px 0;
  border: solid 1px #d9d9d9;
  border-radius: 4px;
  font-weight: normal;
  > div {
    padding: 20px 15px;
    flex: 1;
    font-size: 16px;
    color: #303133;
    &:not(:first-child) {
      border-left: solid 1px #d9d9d9;
    }
    .title {
      font-size: 16px;
      font-weight: 600;
    }
  }
  .content {
    font-size: 32px;
    margin: 20px auto;
    color: #e50010;
    span {
      font-size: 12px;
    }
  }
  .el-divider {
    margin: 12px 0;
  }
  .compare-container {
    line-height: 30px;
    font-size: 14px;
    span {
      position: relative;
      color: #303133;
      margin-right: 20px;
      margin-left: 10px;
      padding-right: 15px;
      font-weight: 600;
      &::after {
        position: absolute;
        content: '';
        background: url(../../../../assets/img/base/up.png) no-repeat;
        right: 0;
        top: 3px;
        width: 12px;
        height: 12px;
        background-size: 100% auto;
      }
      &.down::after {
        background: url(../../../../assets/img/base/down.png) no-repeat;
      }
    }
  }

  .pop-container {
    display: flex;
    font-size: 14px;
    > div {
      flex: 1;
      &:last-child {
        padding-left: 20px;
        border-left: solid 1px #d9d9d9;
      }
      h2 {
        font-weight: 600;
        height: 35px;
        line-height: 35px;
      }
      p {
        height: 35px;
        line-height: 35px;
        color: #909399;
        span {
          position: relative;
          color: #303133;
          font-weight: 600;
          margin-left: 15px;
        }
      }
    }
  }
}
</style>
