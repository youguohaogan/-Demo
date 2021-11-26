<template>
  <div class="layout">
    <v-header />
    <div class="main-layout">
      <section class="main">
        <v-aside />
        <article class="layout-article">
          <router-view />
        </article>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Layout',
  components: {
    'v-aside': () => import('../../components/menu/index.vue'),
    'v-header': () => import('../../components/header/index.vue')
  }
}
</script>
<style lang="less" scoped>
.layout {
  background: #f9f9f9;
  .main-layout {
    height: calc(100vh - 70px);
    overflow-y: auto;
  }
  .main {
    display: flex;
    justify-content: space-between;
    overflow: hidden;
  }
  .layout-article {
    flex: 1;
    padding: 16px;
    max-width: calc(100vw - 191px);
  }
}
</style>
