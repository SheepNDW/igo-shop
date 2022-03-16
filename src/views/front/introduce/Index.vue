<template>
  <GoBanner title="introduce">認識圍棋</GoBanner>
  <div class="container position-relative">
    <!-- 麵包屑 -->
    <GoBread>
      <GoBreadItem to="/">首頁</GoBreadItem>
      <GoBreadItem>認識圍棋</GoBreadItem>
    </GoBread>
    <!-- 文章列表 -->
    <ArticleList />
  </div>
</template>

<script>
import ArticleList from './components/ArticleList.vue'
export default {
  name: 'IntroduceGo',
  components: { ArticleList }
}
</script>
