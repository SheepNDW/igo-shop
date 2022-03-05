<template>
  <!-- 頭部區域 -->
  <AdminHeader subTitle="文章管理" />
  <!-- 卡片視圖 -->
  <div class="flex-fill overflow-auto p-3" style="position: relative">
    <!-- Loading 元件 -->
    <Loading :active="isLoading" :is-full-page="false" />
    <div class="card p-2 shadow-sm" style="min-height: 200px">
      <div class="card-body">
        <div class="d-flex justify-content-end mb-3">
          <button
            class="btn btn-primary ms-auto d-flex"
            type="button"
            @click="openArticleModal('new')"
          >
            <i class="material-icons-outlined me-2">add_circle_outline</i>
            新增文章
          </button>
        </div>
        <ul
          class="row g-0 list-unstyled rounded-0 p-2 article-list text-nowrap border-bottom border-2"
        >
          <li class="col-2">文章標題</li>
          <li class="col-2">作者</li>
          <li class="col-2">描述</li>
          <li class="col-2">建立時間</li>
          <li class="col-2">是否公開</li>
          <li class="col-2">操作</li>
        </ul>
        <ul class="list-group list-group-flush shadow-sm mb-4">
          <li
            class="list-group-item p-2"
            v-for="item in articleList"
            :key="item.id"
          >
            <div class="col-2">{{ item.title }}</div>
            <div class="col-2">{{ item.author }}</div>
            <div class="col-2">{{ item.description }}</div>
            <div class="col-2">
              {{ dayjs.unix(item.create_at).format('YYYY-MM-DD') }}
            </div>
            <div class="col-2 text-success" v-if="item.isPublic">
              <i class="material-icons-outlined">check_circle</i>
            </div>
            <div class="col-2 text-danger" v-else>
              <i class="material-icons-outlined">cancel</i>
            </div>
            <div class="col-2 d-flex justify-content-center">
              <button
                class="btn btn-sm btn-outline-primary fs-7"
                type="button"
                @click="openArticleModal('edit', item)"
              >
                編輯
              </button>
              <button
                class="btn btn-sm btn-outline-danger fs-7 ms-2 ms-md-3"
                type="button"
                @click="removeArticle(item.id)"
              >
                刪除
              </button>
            </div>
          </li>
        </ul>
        <!-- 分頁元件 -->
        <GoPagination
          v-if="pagination?.total_pages > 1"
          :pages="pagination"
          @change-page="changePager"
        />
      </div>
    </div>
  </div>
  <ArticleModal ref="articleModalCom" />
</template>

<script>
import { ref } from 'vue'
import AdminHeader from '@/components/AdminHeader.vue'
import ArticleModal from './components/ArticleModal.vue'
import { getArticles } from '@/api/article'
import dayjs from 'dayjs'
export default {
  name: 'AdminArticle',
  components: { AdminHeader, ArticleModal },
  setup() {
    const isLoading = ref(true)

    // 取得文章列表
    const articleList = ref(null)
    const pagination = ref(null)
    const getArticleList = async (page) => {
      isLoading.value = true
      const data = await getArticles(page)
      articleList.value = data.articles
      pagination.value = data.pagination
      isLoading.value = false
    }
    getArticleList()

    const articleModalCom = ref(null)
    const openArticleModal = () => {
      articleModalCom.value.openModal()
    }

    return {
      isLoading,
      articleList,
      pagination,
      dayjs,
      openArticleModal,
      articleModalCom
    }
  }
}
</script>

<style lang="scss" scoped>
// 標題欄
.article-list {
  text-align: center;
  background: #e9ecef;
}

// 文章列表
.list-group-item {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
