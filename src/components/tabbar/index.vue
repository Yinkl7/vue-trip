<script setup>
import { useRouter } from 'vue-router';
import tabBar from '@/assets/data/tabbar'

const router = useRouter()
const navigatePage = (path) => {
  router.push({
    path
  })
}
</script>

<template>
  <div class="tab-bar">
    <template v-for="item in tabBar" :key="item.path">
      <div class="tab-bar-item" @click="navigatePage(item.path)">{{ item.name }}</div>
    </template>
  </div>
</template>

<style scoped lang="scss">
.tab-bar {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>