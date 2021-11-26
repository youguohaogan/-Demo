import { xAxis, seriesObject } from '@/utils/chart/line'
import { pieObject } from '@/utils/chart/pie'
import { colorList } from '@/utils/tools'
export const mockRoute = [
  // 模拟路由数据
  {
    path: '/',
    name: 'overall',
    component: 'layout',
    menuName: '全局',
    show: true,
    children: [
      {
        show: true,
        component: '',
        path: '/overall/today',
        name: '/overall/today',
        menuName: '今日实时'
      },
      {
        show: true,
        component: '',
        path: '/overall/yesterday',
        name: '/overall/yesterday',
        menuName: '昨日概况'
      },
      {
        show: true,
        component: '',
        path: '/overall/tendency',
        name: '/overall/tendency',
        menuName: '全局趋势'
      },
      {
        show: true,
        component: '',
        path: '/overall/client',
        name: '/overall/client',
        menuName: '客户分析'
      },
      {
        show: true,
        component: '',
        path: '/overall/house',
        name: '/overall/house',
        menuName: '房源分析'
      },
      {
        show: true,
        component: '',
        path: '/overall/organization',
        name: '/overall/organization',
        menuName: '机构分析'
      },
      {
        show: true,
        component: '',
        path: '/overall/member',
        name: '/overall/member',
        menuName: '会员分析'
      }
      // , {
      //   show: true,
      //   component: '',
      //   path: '/overall/special',
      //   name: '/overall/special',
      //   menuName: '管理专题'
      // }
    ]
  },
  {
    show: true,
    path: '/new',
    name: 'new',
    component: 'layout',
    menuName: '新房'
  },
  {
    show: true,
    path: '/old',
    name: 'old',
    component: 'layout',
    menuName: '二手房'
  },
  {
    show: true,
    path: '/extend',
    name: 'extend',
    component: 'layout',
    menuName: '事业扩展'
  },
  {
    show: true,
    path: '/operator',
    name: 'operator',
    component: 'layout',
    menuName: '运营'
  },
  {
    show: true,
    path: '/product',
    name: 'product',
    component: 'layout',
    menuName: '产品'
  },
  {
    show: true,
    path: '/dashboard',
    name: 'dashboard',
    component: 'layout',
    menuName: '活动实时看板'
  },
  {
    show: true,
    path: '/analyse',
    name: 'analyse',
    component: 'layout',
    menuName: '行业数据分析'
  }
  // , {
  //   show: true,
  //   path: '/analyse',
  //   name: 'analyse',
  //   component: 'layout',
  //   menuName: '行业数据分析'
  // }
]
export const series = [] // 模拟chart数据
series[0] = JSON.parse(JSON.stringify(seriesObject))
series[0].name = '今天'
series[0].data = [10, 10, 30, 12, 15, 3, 7, 3, 30, 10]
series[0].lineStyle.color = colorList[0]
series[0].itemStyle.color = colorList[0]
series[1] = JSON.parse(JSON.stringify(seriesObject))
series[1].name = '昨天'
series[1].data = [20, 10, 30, 1, 15, 5, 7, 1, 0, 8]
series[1].lineStyle.color = colorList[1]
series[1].itemStyle.color = colorList[1]
export const xAxisCopy = JSON.parse(JSON.stringify(xAxis)) // 模拟x轴数据
xAxisCopy.data = [1, 2, 3, 4, 5, 6, 7, 8, 42, 3667]
export const pieData = [] // 模拟pie图的数据
pieData[0] = JSON.parse(JSON.stringify(pieObject))
pieData[0].data = [
  {
    name: '恒大',
    value: '300'
  },
  {
    name: '外部',
    value: '100'
  },
  {
    name: '其他',
    value: '30'
  }
]
export const legends = ['今天', '昨天']
