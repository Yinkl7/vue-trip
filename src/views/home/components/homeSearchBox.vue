<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router';
import useCityStore from '@/store/modules/city';
import { storeToRefs } from 'pinia';
import { formatMonthDay, getDiffDays } from '@/utils/formatTime'

const router = useRouter()

const navigateCity = () => {
  router.push('/city')
}
// 
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

const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)

// 切换日期
let startDate = new Date()
let endDate = new Date()
endDate.setDate(endDate.getDate() + 1)

const startTimeStr = ref(formatMonthDay(startDate))
const endTimeStr = ref(formatMonthDay(endDate))
const timeRange = ref(getDiffDays(endDate, startDate))

const showCalendar = ref(false)
const changeDate = () => {
  showCalendar.value = true
}
const onConfirm = (value) => {
  startTimeStr.value = formatMonthDay(value[0])
  endTimeStr.value = formatMonthDay(value[1])
  timeRange.value = getDiffDays(value[1], value[0])
  showCalendar.value = false
}

</script>

<template>
  <div class="home-search-box">
    <!-- 位置信息 -->
    <div class="position">
      <div class="city" @click="navigateCity">{{ currentCity.cityName }}</div>
      <div class="location" @click="handlePositionClick">
        <div>我的位置</div>
        <img src="@/assets/img/home/icon_location.png">
      </div>
    </div>
    <!-- 日期范围 -->
    <div class="section date-range" @click="changeDate">
      <div class="time">
        <div>入住</div>
        <div>{{ startTimeStr }}</div>
      </div>
      <div style="flex: 1;text-align: center;">共{{ timeRange }}晚</div>
      <div class="time">
        <div>离开</div>
        <div>{{ endTimeStr }}</div>
      </div>
    </div>
    <van-calendar v-model:show="showCalendar" color="#ff9854" type="range" :round="false" :show-confirm="false"
      @confirm="onConfirm" />
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

.section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  color: #999;
  height: 44px;
}

.date-range {

  .time {
    min-width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
}
</style>