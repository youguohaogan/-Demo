<template>
  <div class="son-condition">
    <p class="title">筛选条件</p>
    <el-row v-for="item in conditionData"
            :key="item.title">
      <el-col :span="22"
              style="max-width: 1493px;">
        <div class="describe-title">
          <div class="float">
            <span>{{item.title}}:</span>
            <el-checkbox :indeterminate="item.isIndeterminate"
                         style="margin:16px 48px 0 11px"
                         v-model="item.checkAll"
                         @change="handleCheckAllChange($event,item)">全选</el-checkbox>
          </div>
          <el-checkbox-group v-model="item.checkedCities"
                             style="margin-left:90px;"
                             @change="handleCheckedCitiesChange($event,item)">
            <el-checkbox v-for="city in item.cities"
                         style="margin-top:16px; height:23px;margin-right: 48px;"
                         :label="city"
                         :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
        </div>
      </el-col>
      <el-col :span="2"
              v-if="item.data">
        <div @click="openEven(item)"
             class="open-describe">
          {{isopen}}
          <img :style="isopen==='收起'?{'transform': 'rotate(180deg)'}:''"
               src="@/assets/img/base/arrow.png"
               alt="">
        </div>
      </el-col>
    </el-row>
    <div class="time">
      <span>时间周期：</span>
      <el-radio-group v-model="FormTime"
                      @change="radioEven">
        <el-radio :label="7">7天</el-radio>
        <el-radio :label="14">14天</el-radio>
        <el-radio :label="30">30天</el-radio>
        <el-radio :label="0">自定义</el-radio>
      </el-radio-group>
      <el-date-picker class="date-picker"
                      :disabled="isTime"
                      v-model="pickerTime"
                      size="small"
                      @change="datePickerEven"
                      value-format="yyyy-MM-dd"
                      :picker-options="pickerOptions"
                      type="daterange"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期">
      </el-date-picker>
    </div>

  </div>
</template>
<script>
import {
  Checkbox,
  Row,
  Col,
  Radio,
  DatePicker,
  RadioGroup,
  CheckboxGroup
} from 'element-ui'
export default {
  name: 'Condition',
  components: {
    'el-row': Row,
    'el-col': Col,
    'el-date-picker': DatePicker,
    'el-checkbox': Checkbox,
    'el-checkbox-group': CheckboxGroup,
    'el-radio': Radio,
    'el-radio-group': RadioGroup
  },
  data() {
    return {
      formData: {
        time: ''
      },
      isTime: true,
      pickerTime: '',
      FormTime: 7,
      isopen: '展开',
      conditionData: [
        {
          title: '楼盘类型',
          checkAll: false,
          checkedCities: ['上海', '北京'],
          cities: ['上海', '北京', '广州', '深圳'],
          isIndeterminate: true
        },
        {
          title: '地区公司',
          checkAll: false,
          checkedCities: ['上海1'],
          cities: ['上海1', '北京', '广州', '深圳', '北京2', '广州2', '深圳2', '北京3', '广州3', '深圳3', '北京4', '广州4', '北京5', '广州5', '深圳5', '北京6', '广州6', '深圳6', '北京7', '广州7', '深圳7', '北京8', '广州8', '深圳8'],
          isIndeterminate: true
        }
      ],

      pickerOptions: {
        // disabledDate(time) {
        //   return time.getTime() > Date.now()
        // },
        disabledDate(time) {
          let s1 = '2020-07-1'
          s1 = new Date(s1.replace(/-/g, '/'))
          const s2 = new Date()// 当前日期：2017-04-24
          var days = s2.getTime() - s1.getTime()
          const timeValue = parseInt(days / (1000 * 60 * 60 * 24))
          const curDate = (new Date()).getTime()
          const three = (timeValue + 1) * 24 * 3600 * 1000
          const threeMonths = curDate - three
          return time.getTime() > Date.now() || time.getTime() < threeMonths
        }
      }

    }
  },
  created() {
    this.conditionData.forEach((val) => {
      if (val.title === '地区公司') {
        val.data = JSON.parse(JSON.stringify(val.cities))
        val.cities = val.cities.slice(0, 12)
      }
    })
  },
  methods: {
    handleCheckAllChange(value, v) {
      this.conditionData.forEach((val) => {
        if (val.title === v.title) {
          val.checkedCities = value ? val.cities : []
          val.isIndeterminate = false
        }
      })
      this.Submit()
    },

    handleCheckedCitiesChange(value, v) {
      this.conditionData.forEach((val) => {
        if (val.title === v.title) {
          const checkedCount = value.length
          val.checkAll = checkedCount === val.cities.length
          val.isIndeterminate = checkedCount > 0 && checkedCount < val.cities.length
        }
      })
      this.Submit()
    },

    radioEven(vlaue) {
      if (vlaue === 0) {
        this.isTime = false
      } else {
        this.pickerTime = ''
        this.isTime = true
        this.Submit()
      }
    },

    datePickerEven() {
      this.formData.time = this.pickerTime
      this.Submit()
    },

    openEven(vlaue) {
      this.conditionData.forEach((val) => {
        if (val.title === '地区公司') {
          if (val.open) {
            console.log(11)
            val.open = false
            this.isopen = '展开'
            val.cities = val.cities.slice(0, 12)
          } else {
            this.conditionData.forEach((val) => {
              if (val.title === '地区公司' && val.checkAll) {
                val.checkedCities = val.data
              }
            })
            val.open = true
            this.isopen = '收起'
            val.cities = val.data
          }
        }
      })
    },

    Submit() {
      console.log(this.FormTime)
      if (this.FormTime !== 0) {
        this.formData.time = this.FormTime
      }
      setTimeout(() => {
        this.$emit('conditionSubmit', [this.formData, ...this.conditionData])
      }, '2000')
    }
  }
}
</script>
<style lang="less" scoped>
.float {
  float: left;
}

.son-condition {
  height: 100%;
  .title {
    font-weight: 600;
    font-size: 20px;
    color: #303133;
  }
  .describe-title {
    span {
      color: #909399;
    }
    min-width: 180px;
  }
  .open-describe {
    margin-top: 15px;
    font-size: 14px;
    color: #2f69e5;
  }
  .condition-checkbox {
    padding-top: 20px;
    span {
      color: #909399;
    }
  }
  .time {
    margin-top: 16px;
    span {
      color: #909399;
    }
    .date-picker {
      margin-left: 16px;
    }
  }
}
</style>
