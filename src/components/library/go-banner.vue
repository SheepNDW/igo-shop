<template>
  <div
    class="banner"
    :style="{ background: `url(${imgUrl}) center center / cover` }"
  >
    <div class="container">
      <div class="h-100 p-5">
        <h2 class="text-center text-primary fw-bold my-5"><slot /></h2>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'GoBanner',
  props: {
    title: {
      type: String,
      default: 'shop'
    }
  },
  setup(props) {
    const imgUrl = ref('')
    const imgList = [
      // 商城 banner
      'https://storage.googleapis.com/vue-course-api.appspot.com/sheep-api/1646906649618.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=CWlLx4ZRvvK%2BaQ3lkj74ddJ6n244DAp7h3UalpnmuJMwkEFDOcgnC0tUAcDWrDr1wuOghzELVHJFt5ARZiEbrk0PV6qDs2132NCd8gam1ShYiREEUNO1oWKM1B4gWbiVlDgrH67uhongS4aoHwKi%2BMhwzNgjVbZPyyli5sXfejvINdASvrlai2f%2F6A0ENQApZokKTMPz3kKucjXfr4WYFpGoI7ulsuCLAFn7b%2FwS2oEmMZ4eUFxEcpusJWHPNpEvqF7uzUMQ%2FjaVaLzbKNi8viDufCpukNY8iTt9XdukL6cBQQHlybOX%2BBKuO5XCwgNt4Xd1%2F%2Ft4VWHm%2Fh3N69JKLA%3D%3D',
      // 認識圍棋 banner
      'https://storage.googleapis.com/vue-course-api.appspot.com/sheep-api/1646965907562.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=GtVXAS0kprYf6KN8uSfX2TcWEYTfJN68JMgeX%2FixexXKEM8uXkRoxeUQXKHGhGIBkmlqnujS%2BSGwBxkH0CQVY0qUCwoooVPJL2OIreVm0JsWvtq6U2NO9Ub5pwI5AJakG1G19o3%2FYOlI8UfCjg%2BSpiptNS3QX1fb43eH9Yj9iUhdd6ly6KcIJQuDSvezxtQcZ6ODETQmHFL%2F5H27kQ4r4WpOwDW6jJCH11EgqY%2BMXabu0EA8qVMpl6vzUx2ZAz0a29TXp6qchz9YpZPGrlu%2B0NBzN%2BeizWp9evNDEKOjLDepq1UXBO5eKw70D25v2z1JH3yUuuwTDPije69MRXQAeA%3D%3D',
      // 關於我們 banenr
      'https://storage.googleapis.com/vue-course-api.appspot.com/sheep-api/1648713766877.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=EkR7rb53Rx9N%2BvAvLD9mTSUlKu6CeCkNHPgQA9N9XTTTOZMXMbkyUyOTaRAmJHTLQg%2BH7E7h%2FSjpJtRLopjC8DNtTjQCoV6Gukyi%2FNvstgLCynznUr1tQ%2F02ZOL4OPwmkuFX93MEdqyKFQtcWBDTq0NffFhf6FqTONT4r0jujOiuOqZwqGEWhmyaopWt8mECfZygSuVsKkc%2BoFMC0fvWVuZ2D4nXjavuuK5lbcUJeQ7k6pmdQA0eDGwvYeHgyEqXyIqIsMPQBE1a3%2FwEgU6kb3yqH%2BKlQFJTK3Ry26N6YUkHLVODCkyNsG0N0hmrV%2FUGaD41wKnzvrMkZF%2F%2Fg3gmuw%3D%3D'
    ]

    if (props.title === 'shop') {
      imgUrl.value = imgList[0]
    } else if (props.title === 'introduce') {
      imgUrl.value = imgList[1]
    } else if (props.title === 'aboutUs') {
      imgUrl.value = imgList[2]
    }

    return {
      imgUrl
    }
  }
}
</script>
