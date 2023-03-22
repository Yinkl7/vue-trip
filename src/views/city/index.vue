<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import httpRequest from '@/service/request'

const router = useRouter()
// 搜索框
const searchValue = ref("")
const cancelClick = () => {
  router.back()
}

// tab
const active = ref(0)

httpRequest.get({
  url: '/city/all'
}).then(res => {
  console.log("data========= ", res)
}).catch(err => {
  console.log('error============ ', err)
})

</script> 

<template>
  <div class="city">
    <van-search v-model="searchValue" placeholder="" shape="round" show-action @cancel="cancelClick" />

    <van-tabs v-model:active="active" color="#ff9854">
      <van-tab title="国内.港澳台">内容 1</van-tab>
      <van-tab title="海外">内容 2</van-tab>
    </van-tabs>
  </div>
</template>

<style scoped></style>