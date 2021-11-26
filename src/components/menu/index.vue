<template>
  <aside class="sub-menu">
    <ul>
      <li v-for="(item, index) in menuList"
          :key="index"
          @click="$router.push(item.path)"
          :class="{'active': item.path === activePath}">
        <img v-if="item.path === activePath"
             :src="require('../../assets/img/menu/' + activeImg(item.path)+'Active' + '.png')"
             alt="">
        <img v-else
             :src="require('../../assets/img/menu/' + activeImg(item.path) + '.png')"
             alt="">
        {{ item.menuName }}
      </li>
    </ul>
  </aside>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'AsideMenu',
  computed: {
    ...mapState('login', ['route']),
    menuList({ route, $route: { path } }) {
      const activeRoute = route.filter(x => x.children ? JSON.stringify(x.children).match(path) : '')
      return activeRoute[0] ? activeRoute[0].children : []
    },
    activePath({ $route: { path } }) {
      return path
    },
    activeImg() {
      return (data) => {
        return data.split('/')[2]
      }
    }
  }
}
</script>
<style lang="less" scoped>
.sub-menu {
  width: 200px;
  min-height: calc(100vh - 70px);
  background: #fff;
  ul {
    padding-top: 16px;
    li {
      text-align: center;
      line-height: 48px;
      cursor: pointer;
      color: #909399;
      // border-bottom: 1px solid #f0f0f0;
      // transition: all 0.5s;
      font-size: 14px;
      font-weight: 600;
      img {
        margin-top: 15px;
        margin-right: 16px;
      }
      &:hover {
        background: #f5f5f5;
        color: #303133;
      }
    }
    .active {
      border-left: solid 4px #d80c18;
      background: #f5f5f5;
      color: #303133;
    }
  }
}
</style>
