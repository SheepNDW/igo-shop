<template>
  <Swiper
    :modules="modules"
    :slidesPerView="1"
    :autoplay="{
      delay: 2000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    }"
    :loop="true"
    :loopFillGroupWithBlank="true"
    class="mySwiper"
  >
    <SwiperSlide v-for="(item, i) in bannerData" :key="i">
      <div class="position-relative">
        <img :src="item.imgUrl" class="banner-img" />
        <div
          class="text-box p-2 p-md-4 position-absolute start-50 translate-middle-x w-75 w-md-50 w-lg-35"
        >
          <h3 class="h4 text-light mb-0 text-center mb-2 fw-bold">
            {{ item.motto }}
          </h3>
          <p class="mb-2 h5 text-light text-center">
            {{ item.desc }}
          </p>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script>
import { A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue'
import '@/assets/styles/swiper/swiper-bundle.css'
import { ref } from 'vue'
export default {
  name: 'HomeBanner',
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const bannerData = ref([
      {
        imgUrl:
          'https://storage.googleapis.com/vue-course-api.appspot.com/sheep-api/1646557433177.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=k13iaKMI0ngy%2FR6Zxl2CW%2Fgk1loEdXKhHwhpoUU%2FZD4OnTA8Dxp9MrWyJOhJ4Dm7y5pLL97bFvKJWBtce0%2Bhwdo8LGNM1LYuccxg5bjmA%2FVjLBs3%2Be5P8FW%2Foc%2F2BvW0TggrYpqjr2IlIVnqX%2FAdDW9c8Te4QhY2vZQLmiDUx0z%2BIRGF0lUsCHGToTjclzRXYYR97qZmsHBPvzTVdQRb4rkTS7tx%2BnGMn3aOdEM6dZe797uW0LH42%2FZZUTOuvEsF17p5keHc%2Bg7EaAj7wCGeZP58tUYw8Qf6Du6wReOYfgA6JgrgVAD055ZhB83NMcfgJX95ZQrAdZangCH0Jq4ILw%3D%3D',
        motto: '棋如人生，人生如棋',
        desc: '是一種競爭，也是一種調和'
      },
      {
        imgUrl:
          'https://storage.googleapis.com/vue-course-api.appspot.com/sheep-api/1646551712907.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=PR3Btr1lvFS3zRUE8%2B%2F2JPfHiVGp%2FxTEL73KB9gF2TEwe4x%2FD7%2BlxGPS4Nu9Lj%2Bp1Op2EmO%2Bi0XaJ2rAOzze%2BvkyS7MFV3I8GiwDa9LzkbySB1H%2B5VHU12KMzMrTYdqyyWrFrVUF8DsPDe5xELWyPmNAlLcOdKVZ2xxs0exbdJHNJBXtd%2BG9F2PcDx2L0DFKfjeDZClWk6Yz57mVF1UIdz5w91jaPY9l6dOjDwKiPZ2G4Lz490LqeU%2BX4M0xyvi%2FvG%2Fbc3qgnsBKhN1IVnBJM7%2BkTFF3qmjQ4npSnJVzfciRR9PuVP9nz9OxvvfEOF5%2B1U3N%2BSouTkpvXWpDf3t38g%3D%3D',
        motto: '以棋會友，樂在棋中',
        desc: '黑白天地把手談，方圓世界覓從容'
      },
      {
        imgUrl:
          'https://storage.googleapis.com/vue-course-api.appspot.com/sheep-api/1646551819218.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=pqQ093D0xYw80Flm3AulCdts9Uenpsevko0VjZAQ3yOSEuLbcjTNxD%2BOUu3rNnUm64O1%2FoZLzHKds9M5piE8X6gex%2Btse%2FhGT4PXd1GqTiIsS1hzAobCgwSGwZ%2FSes1u2bZmDhNXrwoGJb0eIG7wpsM%2BeBgxf3JFmRTD4Rk7OAjVX6dYKoBzrJ89nQA%2BwUMxaqWiSnljYdZX6S7li2jN1NRdg3KafIbFsUuYf9AI2%2BxMnzlnZEF1U7hNVUmWSRWG%2FPXftwzgmk5o%2FR0NLg0wigPn%2FtfizUu%2BOiNPIbeUIVcpdQr3qev4lRe3iYbt2GJnTfAyxhgdo15652MUrpRAsw%3D%3D',
        motto: '黑白相間，見素抱樸',
        desc: '黑白天地把手談，方圓世界覓從容'
      },
      {
        imgUrl:
          'https://storage.googleapis.com/vue-course-api.appspot.com/sheep-api/1646555862874.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=AmTsHegSrkxY8wgKtkEuAcgKOC4VVH68o15gXQEfQXChChPtbD8nk3Du2t%2FBUOB9BaAvjKBvOjhzqb9eUo6qJxKXE5RKIRQ4Q2RUs5jAVZ6VXmmUyRSpMs7meZFJ8y%2F8JIngo%2FI7aHY1Ltm94rhGs4keaKUzxKuTEQ9AB9uKP2Fjpu09jL2OcchhD%2FYinzjWST3wVb2erRsWjy3wu9EG%2Bw96tpqbdJivJCoq0BvVIPMdpHLzFx%2FFhWc3bnWLIKZH6yzX6PzmXf4UcvoRFx67qjegvilVzl5HPVR2P1yu0MZMBbBHq4LIxk0dTDkZtW0SDBzn3paQwa%2Bq%2BtWbV1cmvQ%3D%3D',
        motto: '動若騁材，靜如遂意',
        desc: '藝當凌絕頂，德不讓古人'
      }
    ])

    return {
      bannerData,
      modules: [A11y, Autoplay]
    }
  }
}
</script>

<style lang="scss" scoped>
.banner-img {
  height: 550px;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
@media (max-width: 576px) {
  :deep(.banner-img) {
    height: 250px;
  }
}

@media (min-width: 768px) {
  .w-md-50 {
    width: 50% !important;
  }
}
@media (min-width: 992px) {
  .w-lg-35 {
    width: 35% !important;
  }
}

.text-box {
  background: rgba(0, 0, 0, 0.3);
  bottom: 30%;
}
</style>
