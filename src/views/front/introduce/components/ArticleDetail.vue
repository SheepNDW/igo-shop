<template>
  <GoBanner title="introduce">{{ article?.title }}</GoBanner>
  <div class="container position-relative">
    <!-- 麵包屑 -->
    <GoBread>
      <GoBreadItem to="/">首頁</GoBreadItem>
      <GoBreadItem to="/whatisgo">認識圍棋</GoBreadItem>
      <GoBreadItem>{{ article?.title }}</GoBreadItem>
    </GoBread>
    <!-- Loading 元件 -->
    <Loading :active="isLoading" />
    <!-- 文章內容 -->
    <div class="row" v-if="article">
      <div class="col-lg-8 me-auto ms-auto">
        <div class="article bg-white rounded shadow-sm p-4 mb-3">
          <div class="d-flex justify-content-between align-items-center">
            <div class="tag"><span v-html="article.tag"></span></div>
            <small class="text-muted">
              {{ dayjs.unix(article.create_at).format('YYYY-MM-DD') }}
            </small>
          </div>
          <div class="txt" v-html="article.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getFrontArticleByID } from '@/api/article'
import dayjs from 'dayjs'

export default {
  name: 'ArticleDetail',
  setup() {
    const isLoading = ref(true)

    // 取得文章內容
    const article = ref(null)
    const route = useRoute()
    const router = useRouter()

    watch(
      () => route.params.id,
      (newValue) => {
        if (newValue && `/whatisgo/${newValue}` === route.path) {
          isLoading.value = true
          getFrontArticleByID(route.params.id)
            .then((data) => {
              article.value = data.article
              isLoading.value = false
            })
            .catch((e) => router.push('/404'))
        }
      },
      { immediate: true }
    )

    return {
      isLoading,
      dayjs,
      article
    }
  }
}
</script>

<style lang="scss" scoped>
.article {
  margin: 0 auto;
  .tag {
    margin: 10px 0;
    & span {
      padding: 4px 12px;
      color: white;
      background: #6c757d;
      display: inline-block;
      border-radius: 40px;
    }
  }
  .txt {
    margin-bottom: 50px;
    :deep(.image) {
      text-align: center;

      img {
        max-width: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
  }
}
</style>
