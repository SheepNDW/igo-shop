<template>
  <h2 class="fs-4 text-center my-5" v-if="title">{{ title }}</h2>
  <Swiper
    :breakpoints="breakpoints"
    :loop="false"
    :pagination="pagination"
    :navigation="navigation"
    :autoplay="true"
    :modules="modules"
    class="mb-5"
  >
    <SwiperSlide v-for="item in slides" :key="item.id">
      <div class="card card-hover" @click="$router.push(`/product/${item.id}`)">
        <img :src="item.imageUrl" class="card-img-top" />
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <h5 class="card-title ellipsis">
              {{ item.title }}
            </h5>
            <div>
              <div class="badge rounded-pill bg-secondary">
                {{ item.category }}
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-between">
            <template v-if="item.origin_price === item.price">
              <span class="h5 ms-auto">原價： {{ item.origin_price }} 元</span>
            </template>
            <template v-else>
              <del>原價： {{ item.origin_price }} 元</del>
              <span class="ms-auto red">特價： {{ item.price }} 元</span>
            </template>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script>
import { Pagination, Navigation, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue'
import '@/assets/styles/swiper/swiper-bundle.css'
import { reactive } from 'vue'
export default {
  name: 'GoCarousel',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    slides: {
      type: Array,
      default: () => []
    },
    pagination: {
      type: Boolean,
      default: false
    },
    navigation: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const breakpoints = reactive({
      640: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    })

    return {
      modules: [Pagination, Navigation, A11y, Autoplay],
      breakpoints
    }
  }
}
</script>

<style lang="scss" scoped>
.card-hover {
  cursor: pointer;
  overflow: hidden;
  transition: all 0.5s;
  &:hover {
    transform: translate3d(0, -3px, 0);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  }
}
.red {
  color: #cf4444;
  font-size: 18px;
  font-weight: bold;
}

// --- Swiper 樣式 ---
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 400px;
  height: 300px;
  object-fit: cover;
}

.swiper {
  margin-left: auto;
  margin-right: auto;
}
</style>
