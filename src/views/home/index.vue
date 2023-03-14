<script setup>
import navBar from './components/navBar.vue'
import homeSearchBox from './components/homeSearchBox.vue'
</script>

<template>
  <div class="home">
    <nav-bar />

    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>

    <home-search-box />
  </div>
</template>

<style scoped lang="scss">
.banner img {
  width: 100%;
}
</style>