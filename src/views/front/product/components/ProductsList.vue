<template>
  <div class="row">
    <!-- 左側分類欄 -->
    <div class="col-md-3">
      <ul class="category-panel list-group list-unstyled text-center">
        <li>
          <a
            href="javascript:;"
            class="list-group-item list-group-item-action active"
          >
            全部
          </a>
        </li>
        <li v-for="cate in categoryList" :key="cate">
          <a href="javascript:;" class="list-group-item list-group-item-action">
            {{ cate }}
          </a>
        </li>
      </ul>
    </div>
    <!-- 右側產品列表 -->
    <div class="col-md-9">
      <div class="row" v-if="productList">
        <div
          class="col-lg-4 col-md-6 mb-3"
          v-for="item in productList"
          :key="item.id"
        >
          <div class="card h-100 position-relative product-card">
            <div class="product-card-imgbox">
              <div
                class="picture"
                :style="`background-image: url(${item.imageUrl})`"
              />
            </div>
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <h5 class="card-title">
                  {{ item.title }}
                </h5>
                <div>
                  <div class="badge rounded-pill bg-secondary h5">
                    {{ item.category }}
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-between">
                <template v-if="item.origin_price === item.price">
                  <span class="h5 ms-auto"
                    >原價： {{ item.origin_price }} 元</span
                  >
                </template>
                <template v-else>
                  <del>原價： {{ item.origin_price }} 元</del>
                  <span class="text-primary h5 ms-auto"
                    >特價： {{ item.price }} 元</span
                  >
                </template>
              </div>
              <div class="d-flex justify-content-center">
                <button class="btn btn-outline-primary me-3" type="button">
                  <span class="spinner-grow spinner-grow-sm" />
                  查看
                </button>
                <button class="btn btn-primary d-flex" type="button">
                  <i class="material-icons-round"> add_shopping_cart </i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { productCategory } from '@/api/constants'
import { getProductsAll } from '@/api/product'
export default {
  name: 'ProductsList',
  setup() {
    const categoryList = ref(productCategory)

    const productList = ref(null)
    getProductsAll().then((data) => {
      console.log(data)
      productList.value = data.products
    })

    return {
      categoryList,
      productList
    }
  }
}
</script>

<style lang="scss" scoped>
// 產品卡片
.product-card {
  &-imgbox {
    overflow: hidden;
  }
  .picture {
    background-size: cover;
    background-position: center center;
    height: 250px;
    transition: transform 0.5s;
    // hover 遮罩
    &:hover {
      position: relative;
      transform: scale(1.25);
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.3);
      }
      &:after {
        content: '查看詳情';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
      }
    }
  }
}
</style>
