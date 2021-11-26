<template>
  <header class="header">
    <a href="javascript:"
       class="logo">
      <img src="../../assets/img/base/logo.png"
           alt="logo">
    </a>
    <ul class="headr-menu">
      <li v-for="(item, index) in route"
          :key="index"
          @click="jump(item)"
          :class="{ 'active': activeRoute(item) === item.path }">
        {{ item.menuName }}
      </li>
    </ul>

    <!-- <div class="header-right">
      <svg t="1622515738277"
           class="icon"
           viewBox="0 0 1024 1024"
           version="1.1"
           xmlns="http://www.w3.org/2000/svg"
           p-id="2038"
           width="20"
           height="20">
        <path d="M512 512c142.222222 0 256-113.777778 256-256S654.222222 0 512 0 256 113.777778 256 256s113.777778 256 256 256z m176.253968 62.47619h-34.031746c-45.714286 22.857143-96.507937 34.031746-147.809524 34.031747s-102.603175-11.174603-147.809523-34.031747h-28.444445C181.84127 574.47619 62.47619 694.349206 62.47619 842.15873v85.333333c0 51.301587 45.714286 96.507937 96.507937 96.507937h706.031746c51.301587 0 96.507937-45.714286 96.507937-96.507937v-85.333333c0-147.809524-124.952381-267.68254-273.269842-267.68254z"
              p-id="2039"
              fill="#606266"></path>
      </svg>
      <small>{{ user.emsNum }}</small>
      <span>
        <svg t="1622515773712"
             class="icon notice-icon"
             viewBox="0 0 1024 1024"
             version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             p-id="2965"
             width="24"
             height="24">
          <path d="M871.5 683.2h-95.9v-248c0-128.5-93.6-236.1-215.9-258.4 0.1-1.5 0.4-2.9 0.4-4.5 0-27-21.9-48.9-48.9-48.9s-48.9 21.9-48.9 48.9c0 1.7 0.3 3.3 0.5 4.9C342 200.8 250 307.7 250 435.2v248.1h-95.9c-8.9 0-16.1 7.2-16.1 16.1v41.3c0 8.9 7.2 16.1 16.1 16.1h717.4c8.9 0 16.1-7.2 16.1-16.1v-41.3c0-9-7.2-16.2-16.1-16.2zM515.5 902.3c38.4 0 69.6-31.2 69.6-69.6H446c0 38.4 31.1 69.6 69.5 69.6z"
                fill="#606266"
                p-id="2966"></path>
        </svg>
        <i>0</i>
      </span>
      <svg t="1622515922616"
           class="icon out-icon"
           viewBox="0 0 1024 1024"
           version="1.1"
           xmlns="http://www.w3.org/2000/svg"
           p-id="3941"
           width="20"
           height="20">
        <path d="M763.611429 200.411429a432.566857 432.566857 0 0 1 137.216 147.456A384.219429 384.219429 0 0 1 950.857143 537.819429c0 57.124571-11.629714 110.811429-34.816 160.914285a420.571429 420.571429 0 0 1-94.134857 130.925715 449.974857 449.974857 0 0 1-139.264 88.502857 447.122286 447.122286 0 0 1-171.154286 32.694857 456.192 456.192 0 0 1-309.906286-121.270857 410.185143 410.185143 0 0 1-94.134857-130.925715A382.537143 382.537143 0 0 1 73.142857 537.819429c0-32.475429 4.096-64.438857 12.288-95.817143a410.331429 410.331429 0 0 1 34.816-89.453715c14.994286-28.233143 33.645714-54.710857 55.881143-79.286857a465.334857 465.334857 0 0 1 74.532571-66.340571 63.488 63.488 0 0 1 46.592-11.117714 62.317714 62.317714 0 0 1 40.667429 23.113142 52.589714 52.589714 0 0 1 11.776 43.300572 57.636571 57.636571 0 0 1-24.502857 38.765714 291.84 291.84 0 0 0-94.646857 104.155429c-21.942857 41.179429-32.914286 85.430857-32.914286 132.754285 0 40.594286 8.265143 78.848 24.576 114.834286 16.384 35.84 38.765714 67.291429 67.145143 93.988572a323.584 323.584 0 0 0 222.134857 87.113142 323.510857 323.510857 0 0 0 222.134857-87.113142c28.525714-26.770286 50.980571-58.075429 67.657143-94.061715a269.604571 269.604571 0 0 0 25.014857-114.834285c0-47.908571-11.702857-93.184-35.254857-135.899429A294.034286 294.034286 0 0 0 691.931429 296.228571a55.369143 55.369143 0 0 1-25.965715-37.741714 55.442286 55.442286 0 0 1 10.24-44.251428 60.708571 60.708571 0 0 1 40.228572-23.552 65.097143 65.097143 0 0 1 47.104 9.654857zM511.414857 540.525714a61.44 61.44 0 0 1-43.593143-16.969143 54.345143 54.345143 0 0 1-18.139428-41.033142v-350.354286c0-16.018286 5.997714-29.842286 18.139428-41.545143A60.562286 60.562286 0 0 1 511.488 73.142857c17.700571 0 32.548571 5.851429 44.617143 17.554286 12.141714 11.702857 18.139429 25.453714 18.139428 41.472v350.354286a54.345143 54.345143 0 0 1-18.139428 40.96 62.683429 62.683429 0 0 1-44.617143 17.115428z"
              p-id="3942"
              fill="#606266"></path>
      </svg>
    </div> -->
  </header>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Header',
  computed: {
    ...mapState('login', ['route', 'user']),
    activeRoute() {
      return (item) => {
        const menu = item.children && JSON.stringify(item.children).match(item)
        return menu ? item.path : ''
      }
    }
  },
  methods: {
    jump(item) {
      const menu = item.children
      if (menu && menu.length > 0) {
        this.$router.push(menu[0].path)
      } else {
        // this.$router.push('/err')
      }
    }
  }
}
</script>
<style lang="less" scoped>
.header {
  height: 64px;
  background: #fff;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 10;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  .logo {
    width: 155px;
    padding: 20px 0 0 10px;
    img {
      width: 100px;
      height: 26px;
    }
  }
  .headr-menu {
    // flex: 1;
    margin-right: 182px;
    li {
      float: left;
      line-height: 64px;
      font-size: 16px;
      padding: 0 1.5625vw;
      cursor: pointer;
      position: relative;
      transition: all 0.5s;
      &:hover {
        color: #d80c18;
        &::after {
          content: '';
          position: absolute;
          width: 35px;
          height: 4px;
          background: #d80c18;
          left: 50%;
          transform: translateX(-50%);
          bottom: 0px;
        }
      }
    }
    .active {
      color: #d80c18;
      &::after {
        content: '';
        position: absolute;
        width: 35px;
        height: 4px;
        background: #d80c18;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0px;
      }
    }
  }
  .header-right {
    width: 240px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    small {
      font-size: 14px;
      margin: 0 10px 0 5px;
    }
    .notice-icon {
      position: relative;
      top: 2px;
      cursor: pointer;
    }
    .out-icon {
      margin: 0 10px;
      cursor: pointer;
    }
    span {
      position: relative;
      i {
        font-style: normal;
        width: 16px;
        height: 16px;
        border-radius: 8px;
        text-align: center;
        line-height: 16px;
        background: #d80c18;
        position: absolute;
        font-size: 12px;
        color: #fff;
        right: -2px;
        top: -2px;
      }
    }
  }
}
</style>
