import { defineStore } from "pinia";
import { getAllCity } from "@/service/modules/city";

const useCityStore = defineStore('city', {
  state: () => ({
    allCities: {},
    currentCity: {
      cityName: '上海'
    }
  }),
  actions: {
    async getCitys() {
      const res = await getAllCity()
      this.allCities = res.data.data
    }
  }
})

export default useCityStore
