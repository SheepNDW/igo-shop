<template>
  <div class="banner">
    <div class="container">
      <div class="h-100 p-5">
        <h2 class="text-center text-primary fw-bold my-5">認識圍棋</h2>
      </div>
    </div>
  </div>
  <div class="container">
    <!-- 麵包屑 -->
    <GoBread>
      <GoBreadItem to="/">首頁</GoBreadItem>
      <GoBreadItem>認識圍棋</GoBreadItem>
    </GoBread>
  </div>
</template>

<script>
export default {
  name: 'IntroduceGo'
}
</script>

<style lang="scss" scoped>
.banner {
  background: url(https://storage.googleapis.com/vue-course-api.appspot.com/sheep-api/1646965907562.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=GtVXAS0kprYf6KN8uSfX2TcWEYTfJN68JMgeX%2FixexXKEM8uXkRoxeUQXKHGhGIBkmlqnujS%2BSGwBxkH0CQVY0qUCwoooVPJL2OIreVm0JsWvtq6U2NO9Ub5pwI5AJakG1G19o3%2FYOlI8UfCjg%2BSpiptNS3QX1fb43eH9Yj9iUhdd6ly6KcIJQuDSvezxtQcZ6ODETQmHFL%2F5H27kQ4r4WpOwDW6jJCH11EgqY%2BMXabu0EA8qVMpl6vzUx2ZAz0a29TXp6qchz9YpZPGrlu%2B0NBzN%2BeizWp9evNDEKOjLDepq1UXBO5eKw70D25v2z1JH3yUuuwTDPije69MRXQAeA%3D%3D)
    center center / cover;
}
</style>
