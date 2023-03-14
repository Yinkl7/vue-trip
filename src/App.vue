<script setup>
import tabbar from '@/components/tabbar/vantTab.vue'
import { useRoute } from 'vue-router';
// import tabbar from '@/components/tabbar/index.vue'
const route = useRoute()
</script>

<template>
  <router-view></router-view>
  <tabbar v-if="route.meta.showNavBar" />
</template>

<style scoped></style>
