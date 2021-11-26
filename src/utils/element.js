import Vue from 'vue'
import ElTabBar from 'el-table-bar-base'
import { successMessage, errorMessage } from '@/utils/tools'
import { Loading, Scrollbar, Message } from 'element-ui'
Vue.use(Scrollbar)
Vue.use(ElTabBar)
Vue.use(Loading)
Vue.component(Message.name, Message)
Vue.prototype.successMessage = successMessage
Vue.prototype.errorMessage = errorMessage
Vue.prototype.message = successMessage
