import { colorList } from '@/utils/tools'
export const pieOption = {
  backgroundColor: '#fff',
  color: colorList,
  legend: {
    icon: 'circle',
    orient: 'vertical',
    align: 'left',
    right: '2%',
    top: '40%',
    itemWidth: 10,
    itemHeight: 10,
    textStyle: {
      color: '#333'
    }
  },
  tooltip: {
    trigger: 'item'
  }
}
export const pieObject = {
  type: 'pie',
  radius: ['30%', '55%'],
  center: ['42%', '50%'],
  data: [],
  hoverAnimation: false,
  labelLine: {
    normal: {
      show: true,
      length: 15, // 第一段线 长度
      length2: 50, // 第二段线 长度
      align: 'right'
    },
    emphasis: {
      show: true
    }
  }
}
