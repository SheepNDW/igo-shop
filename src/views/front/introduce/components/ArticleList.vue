<template>
  <!-- Loading 元件 -->
  <Loading :active="isLoading" :is-full-page="false" />

  <div class="row justify-content-center">
    <ul class="list-unstyled mt-4 d-flex flex-wrap col-12 col-lg-8">
      <li
        class="col-12"
        v-for="item in articleList"
        :key="item.id"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        <div class="card mb-3" @click="$router.push(`/whatisgo/${item.id}`)">
          <div class="article row g-0">
            <div class="article-imgbox col-3">
              <img :src="item.imageUrl" class="rounded-start" />
            </div>
            <div class="col-9 my-auto">
              <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text ellipsis">
                  {{ item.description }}
                </p>
                <p class="card-text">
                  <small class="text-muted">{{
                    dayjs.unix(item.create_at).format('YYYY-MM-DD')
                  }}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <!-- 分頁元件 -->
  <GoPagination
    v-if="pagination?.total_pages > 1"
    :pages="pagination"
    @change-page="changePager"
  />
</template>

<script>
import { ref } from 'vue'
import { getFrontArticles } from '@/api/article'
import dayjs from 'dayjs'
export default {
  name: 'ArticleList',
  setup() {
    const isLoading = ref(true)

    // 取得文章列表
    const articleList = ref([])
    const pagination = ref(null)
    const getArticlesList = async (page) => {
      isLoading.value = true
      const data = await getFrontArticles(page)
      articleList.value = data.articles
      pagination.value = data.pagination
      isLoading.value = false
    }
    getArticlesList()

    return {
      isLoading,
      articleList,
      pagination,
      dayjs
    }
  }
}
</script>

<style lang="scss" scoped>
.article {
  height: 160px;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
    & .article-imgbox img {
      transform: scale(1.1);
    }
  }

  .article-imgbox {
    height: 160px;
    overflow: hidden;
    transition: all 0.3s;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transition: all 0.3s;
    }
  }
}
@media (max-width: 576px) {
  .article {
    height: 120px;
    .article-imgbox {
      height: 120px;
    }
  }
}
</style>
