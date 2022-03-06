<template>
  <Swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :loop="false"
    :pagination="{
      clickable: true
    }"
    :navigation="false"
    :autoplay="true"
    :modules="modules"
    class="mySwiper"
  >
    <SwiperSlide v-for="img in imgList" :key="img">
      <img :src="img" alt="" class="position-absolute" />
      <div class="col-md-6 p-lg-6 mx-auto my-5 position-relative motto">
        <blockquote class="blockquote">
          <h1 class="display-6 fw-bold text-light">棋如人生，人生如棋</h1>
        </blockquote>
        <figcaption class="blockquote-footer text-light mt-1">
          名利似紙張張輕，世事如棋局局新。
        </figcaption>
        <router-link class="btn btn-primary" to="/products">
          查看更多
        </router-link>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script>
// 關於報錯問題: https://stackoverflow.com/questions/69421228/this-dependency-was-not-found-swiper-vue-how-to-fix
import { Pagination, Navigation, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue'
import '@/assets/styles/swiper/swiper-bundle.css'
export default {
  name: 'GoCarousel',
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const imgList = [
      'https://storage.googleapis.com/vue-course-api.appspot.com/sheep-api/1646551712907.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=PR3Btr1lvFS3zRUE8%2B%2F2JPfHiVGp%2FxTEL73KB9gF2TEwe4x%2FD7%2BlxGPS4Nu9Lj%2Bp1Op2EmO%2Bi0XaJ2rAOzze%2BvkyS7MFV3I8GiwDa9LzkbySB1H%2B5VHU12KMzMrTYdqyyWrFrVUF8DsPDe5xELWyPmNAlLcOdKVZ2xxs0exbdJHNJBXtd%2BG9F2PcDx2L0DFKfjeDZClWk6Yz57mVF1UIdz5w91jaPY9l6dOjDwKiPZ2G4Lz490LqeU%2BX4M0xyvi%2FvG%2Fbc3qgnsBKhN1IVnBJM7%2BkTFF3qmjQ4npSnJVzfciRR9PuVP9nz9OxvvfEOF5%2B1U3N%2BSouTkpvXWpDf3t38g%3D%3D',
      'https://storage.googleapis.com/vue-course-api.appspot.com/sheep-api/1646557433177.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=k13iaKMI0ngy%2FR6Zxl2CW%2Fgk1loEdXKhHwhpoUU%2FZD4OnTA8Dxp9MrWyJOhJ4Dm7y5pLL97bFvKJWBtce0%2Bhwdo8LGNM1LYuccxg5bjmA%2FVjLBs3%2Be5P8FW%2Foc%2F2BvW0TggrYpqjr2IlIVnqX%2FAdDW9c8Te4QhY2vZQLmiDUx0z%2BIRGF0lUsCHGToTjclzRXYYR97qZmsHBPvzTVdQRb4rkTS7tx%2BnGMn3aOdEM6dZe797uW0LH42%2FZZUTOuvEsF17p5keHc%2Bg7EaAj7wCGeZP58tUYw8Qf6Du6wReOYfgA6JgrgVAD055ZhB83NMcfgJX95ZQrAdZangCH0Jq4ILw%3D%3D',
      'https://storage.googleapis.com/vue-course-api.appspot.com/sheep-api/1646551819218.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=pqQ093D0xYw80Flm3AulCdts9Uenpsevko0VjZAQ3yOSEuLbcjTNxD%2BOUu3rNnUm64O1%2FoZLzHKds9M5piE8X6gex%2Btse%2FhGT4PXd1GqTiIsS1hzAobCgwSGwZ%2FSes1u2bZmDhNXrwoGJb0eIG7wpsM%2BeBgxf3JFmRTD4Rk7OAjVX6dYKoBzrJ89nQA%2BwUMxaqWiSnljYdZX6S7li2jN1NRdg3KafIbFsUuYf9AI2%2BxMnzlnZEF1U7hNVUmWSRWG%2FPXftwzgmk5o%2FR0NLg0wigPn%2FtfizUu%2BOiNPIbeUIVcpdQr3qev4lRe3iYbt2GJnTfAyxhgdo15652MUrpRAsw%3D%3D',
      'https://storage.googleapis.com/vue-course-api.appspot.com/sheep-api/1646555862874.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=AmTsHegSrkxY8wgKtkEuAcgKOC4VVH68o15gXQEfQXChChPtbD8nk3Du2t%2FBUOB9BaAvjKBvOjhzqb9eUo6qJxKXE5RKIRQ4Q2RUs5jAVZ6VXmmUyRSpMs7meZFJ8y%2F8JIngo%2FI7aHY1Ltm94rhGs4keaKUzxKuTEQ9AB9uKP2Fjpu09jL2OcchhD%2FYinzjWST3wVb2erRsWjy3wu9EG%2Bw96tpqbdJivJCoq0BvVIPMdpHLzFx%2FFhWc3bnWLIKZH6yzX6PzmXf4UcvoRFx67qjegvilVzl5HPVR2P1yu0MZMBbBHq4LIxk0dTDkZtW0SDBzn3paQwa%2Bq%2BtWbV1cmvQ%3D%3D'
    ]

    return {
      modules: [Pagination, Navigation, A11y, Autoplay],
      imgList
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 55vh;
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
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  margin-left: auto;
  margin-right: auto;
}

// 遮罩層
.motto {
  background: rgba(0, 0, 0, 0.3);
  padding: 2rem;
}
</style>
