<template>
  <div class="organization">
    <div class="crrux-index">
      <span class="title">关键指标</span>
      <el-tooltip class="item"
                  effect="dark"
                  content="item.info"
                  placement="right-end">
        <img style=" margin-left: 5px; margin-top: 5px;"
             src="@/assets/img/base/inof.png"
             alt="">
      </el-tooltip>
      <el-card />
    </div>
    <div>
      <index-table />
    </div>
  </div>
</template>
<script>
import { Tooltip } from 'element-ui'
export default {
  name: 'Organization',
  components: {
    // 'el-col': Col,
    // 'el-row': Row,
    // 'el-card': Card,
    'el-tooltip': Tooltip,
    'index-table': () => import('./components/index-table.vue'),
    'el-card': () => import('./components/index-card.vue')
  }
}
</script>
<style lang="less" scoped>
.organization {
  height: 100%;
  // width: 100%;
  background: #fff;
  padding: 16px;
  .crrux-index {
  }
}
.title {
  font-weight: 600;
  font-size: 20px;
  color: #303133;
}
</style>
