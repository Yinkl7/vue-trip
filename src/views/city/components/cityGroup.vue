<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import useCityStore from '@/store/modules/city'

const props = defineProps({
  groupData: {
    type: Object,
    default: () => { }
  }
})

const indexList = computed(() => {
  const list = props.groupData.cities.map(item => item.group)
  list.unshift('#')
  return list
})

const router = useRouter()
const cityStore = useCityStore()
const selectCity = (city) => {
  /**
   * 1、保存数据
   * 2、跳转回首页
   */
  cityStore.currentCity = city
  router.back()
}

</script>

<template>
  <van-index-bar :index-list="indexList">
    <van-index-anchor index="热门" />
    <div class="list">
      <template v-for="(hotCity, hotIndex) in groupData.hotCities" :key="hotIndex">
        <div class="city" @click="selectCity(hotCity)">{{ hotCity.cityName }}</div>
      </template>
    </div>

    <template v-for="(group, groupIndex) in groupData.cities" :key="groupIndex">
      <van-index-anchor :index="group.group" />
      <template v-for="(city, cityIndex) in group.cities" :key="cityIndex">
        <van-cell :title="city.cityName" @click="selectCity(city)" />
      </template>
    </template>

  </van-index-bar>
</template>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
  padding-right: 25px;

  .city {
    width: 70px;
    height: 28px;
    line-height: 28px;
    border-radius: 14px;
    font-size: 12px;
    color: #000;
    text-align: center;
    background-color: #fff4ec;
    margin: 10px 0;
  }
}
</style>