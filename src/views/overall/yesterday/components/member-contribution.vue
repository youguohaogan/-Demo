<template>
  <div class="member-container">
    <h2>
      会员成交贡献
      <el-radio-group class="tools" v-model="mType">
        <el-radio-button label="个人会员"></el-radio-button>
        <el-radio-button label="企业会员"></el-radio-button>
      </el-radio-group>
    </h2>
    <div>
      <el-table :data="tableData" border>
        <el-table-column
          label="会员类型"
          prop="memberType"
          :width="180"
        ></el-table-column>
        <el-table-column label="推荐成交套数">
          <template>
            <p class="progress-container">
              <span>120393</span>
              <el-progress
                :show-text="false"
                :stroke-width="18"
                :percentage="80"
                color="#e50010"
              >
              </el-progress>
            </p>
          </template>
        </el-table-column>
        <el-table-column label="推荐成交金额">
          <template>
            <p class="progress-container">
              <span>120393</span>
              <el-progress
                :show-text="false"
                :stroke-width="18"
                :percentage="80"
                color="#e50010"
              >
              </el-progress>
            </p>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import {
  Progress,
  RadioGroup,
  RadioButton,
  Table,
  TableColumn
} from 'element-ui'
export default {
  name: 'MemberContribution',
  components: {
    'el-radio-group': RadioGroup,
    'el-radio-button': RadioButton,
    'el-table': Table,
    'el-table-column': TableColumn,
    'el-progress': Progress
  },
  props: {
    propName: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      mType: '个人会员',
      tableData: [
        { memberType: '员工' },
        { memberType: '拓客' },
        { memberType: '老业主' },
        { memberType: '精英/自然晋升' },
        { memberType: '新发展' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.el-table thead {
  color: #303133;
  font-weight: 600;
  font-size: 14px;
}
.member-container {
  background-color: #fff;
  border-radius: 8px;
  margin-top: 20px;
  padding: 15px;
  h2 {
    position: relative;
    font-size: 20px;
    font-weight: 600;
    height: 50px;
    line-height: 50px;
    margin-bottom: 10px;
    color: #303133;
    .tools {
      position: absolute;
      right: 0;
      top: 5px;
    }
  }
}
.progress-container {
  display: flex;
  span {
    margin-right: 20px;
    font-size: 16px;
    font-weight: 600;
    color: #303133;
  }
  .el-progress {
    flex: 1;
    max-width: 300px;
  }
}
</style>
