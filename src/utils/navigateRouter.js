import { useRouter } from "vue-router";

const router = useRouter()

function navigateRouter(path, option = {}) {
  router.push({
    path,
    option
  })
}

export default navigateRouter
