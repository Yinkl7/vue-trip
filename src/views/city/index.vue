<script setup>
import useCityStore from '@/store/modules/city'
import cityGroup from './components/cityGroup.vue'

import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'


const router = useRouter()
// 搜索框
const searchValue = ref("")
const cancelClick = () => {
  router.back()
}

// tab
const tabActive = ref()
const cityStore = useCityStore()
cityStore.getCitys()
const { allCities } = storeToRefs(cityStore)
const currentGroup = computed(() => allCities.value[tabActive.value])

</script> 

<template>
  <div class="city">
    <div class="search">
      <van-search v-model="searchValue" placeholder="" shape="round" show-action @cancel="cancelClick" />
      <van-tabs v-model:active="tabActive" color="#ff9854">
        <template v-for="(value, key) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>

    <div class="content">
      <template v-for="(value, key) in allCities" :key="key">
        <city-group v-show="tabActive == key" :groupData="value" />
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.city {
  .search {
    position: relative;
    z-index: 999;
  }

  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>