<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const navigateCity = () => {
  router.push('/city')
}

const handlePositionClick = () => {
  navigator.geolocation.getCurrentPosition(res => {
    console.log('成功回调======= ', res)
  }, err => {
    console.log('失败回调======= ', err)
  }, {
    enableHighAccuracy: true,
    timeout: 2000,
    maximumAge: 0
  })
}
</script>

<template>
  <div class="home-search-box">
    <div class="position">
      <div class="city" @click="navigateCity">上海</div>
      <div class="location" @click="handlePositionClick">
        <div>我的位置</div>
        <img src="@/assets/img/home/icon_location.png">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.position {
  display: flex;
  align-items: center;
  font-size: 12px;
  padding: 0 12px;
  height: 44px;
  color: #333;

  .city {
    flex: 1;
    font-size: 15px;
  }

  .location {
    width: 74px;
    display: flex;
    align-items: center;
    color: #666;

    img {
      margin-left: 4px;
      width: 18px;
      height: 18px;
    }
  }
}
</style>