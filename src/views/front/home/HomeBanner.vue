<template>
  <Swiper
    :modules="modules"
    :slidesPerView="1"
    :autoplay="{
      delay: 4000,
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
          'https://storage.googleapis.com/vue-course-api.appspot.com/sheep-api/1648559373714.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=dZwhzuNVcIwtN1tObYfYXxD52gQeTeiOcOL8JOXbldco4YhjfKS%2FEEyTAGu4b%2FQx%2B8Tqah8pRvf%2FxHyyAEGYKBPdhEzdjoZ%2F%2BnbzigTB1JinuyY%2FQ1RJ8ReAAB5mb8N%2FBnRPGJ3oWGPHc23ulQmTtOJmNGV97ATdHzo3HATeUY9ddM8pgXTCwA1ZotBQTq%2Fy0AGfr4V%2Fp2pc7M4hYHVYgmSC01loRGtE3KEP14MhEkOyRhqYJ7enI0Lf3GmiqwrOdIgSkISYXN0SjK82bILHFSl9RI180OOJLrAetEPUJy7qkU7ZAT9FtlmNVh2IxyWTUCWqaPlZ3sY9%2BkyevBcDlA%3D%3D',
        motto: '以棋會友，樂在棋中',
        desc: '黑白天地把手談，方圓世界覓從容'
      },
      {
        imgUrl:
          'https://storage.googleapis.com/vue-course-api.appspot.com/sheep-api/1648559591653.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=mIvr99JldhasrrHQf5Ge3qHvNW5MBjQfzfJXxCZno811e62JvpnB1J57EmrMX9xs4W6aGQ33t75ZGARrMe9%2BJMi3YC0SRv4a1b5qzAo4KwUF5I0XexXl8%2Bryue9aD69AyPPQY7n2n3bcxyDK1zXhXYap%2Fj7M62BYOAKNJ2eusi%2BRGpKzwGUCEX0Ew2ZdqUZqbywtT5C2CuW0lHwXkPUu3NLCdzwx4jPpp2VQ9OAr5Nb6AWq5T35vsMZGzLe0KKAuwi44mZv41I06UsI659icL9HwCJVbKZIgBl08p3Qi4YfGEBLSOWXlxAxRl%2FU3L9t%2F4yjx8MXNSBI%2FSBs8H3QwHQ%3D%3D',
        motto: '黑白相間，見素抱樸',
        desc: '紋枰古道穿行，領略圍棋風情'
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
