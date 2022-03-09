<template>
  <div class="container">
    <!-- banner -->
    <div class="about-banner position-relative">
      <h2
        class="h2 bg-subTitle text-center text-light position-absolute px-4 py-3"
      >
        關於我們
      </h2>
    </div>
    <!-- 麵包屑 -->
    <GoBread>
      <GoBreadItem to="/">首頁</GoBreadItem>
      <GoBreadItem>關於我們</GoBreadItem>
    </GoBread>
  </div>
  <!-- about us -->
  <div class="bg-white">
    <div class="about-us d-none d-sm-block container position-relative">
      <div class="about-img">
        <img
          src="https://storage.googleapis.com/vue-course-api.appspot.com/sheep-api/1646557433177.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=k13iaKMI0ngy%2FR6Zxl2CW%2Fgk1loEdXKhHwhpoUU%2FZD4OnTA8Dxp9MrWyJOhJ4Dm7y5pLL97bFvKJWBtce0%2Bhwdo8LGNM1LYuccxg5bjmA%2FVjLBs3%2Be5P8FW%2Foc%2F2BvW0TggrYpqjr2IlIVnqX%2FAdDW9c8Te4QhY2vZQLmiDUx0z%2BIRGF0lUsCHGToTjclzRXYYR97qZmsHBPvzTVdQRb4rkTS7tx%2BnGMn3aOdEM6dZe797uW0LH42%2FZZUTOuvEsF17p5keHc%2Bg7EaAj7wCGeZP58tUYw8Qf6Du6wReOYfgA6JgrgVAD055ZhB83NMcfgJX95ZQrAdZangCH0Jq4ILw%3D%3D"
          alt="about"
          class="img-fiuld rounded"
        />
      </div>
      <div class="about-content card">
        <div class="card-body bg-gray-200 text-center">
          <h5 class="card-title text-primary fw-bold">關於碁人館</h5>
          <p class="card-text">我們是由一群圍棋愛好者所組成</p>
          <p class="card-text">
            在這裡的每一個人都熱愛著圍棋 追求棋藝的同時也很講究所使用的棋具
          </p>
          <p class="card-text">就讓我們為您提供最適合您的棋具吧!!</p>
        </div>
      </div>
    </div>
    <!-- 手機模式 -->
    <div class="about-us d-sm-none row container mx-auto">
      <div class="about-content-sm col-12 my-auto">
        <img
          src="https://storage.googleapis.com/vue-course-api.appspot.com/sheep-api/1646557433177.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=k13iaKMI0ngy%2FR6Zxl2CW%2Fgk1loEdXKhHwhpoUU%2FZD4OnTA8Dxp9MrWyJOhJ4Dm7y5pLL97bFvKJWBtce0%2Bhwdo8LGNM1LYuccxg5bjmA%2FVjLBs3%2Be5P8FW%2Foc%2F2BvW0TggrYpqjr2IlIVnqX%2FAdDW9c8Te4QhY2vZQLmiDUx0z%2BIRGF0lUsCHGToTjclzRXYYR97qZmsHBPvzTVdQRb4rkTS7tx%2BnGMn3aOdEM6dZe797uW0LH42%2FZZUTOuvEsF17p5keHc%2Bg7EaAj7wCGeZP58tUYw8Qf6Du6wReOYfgA6JgrgVAD055ZhB83NMcfgJX95ZQrAdZangCH0Jq4ILw%3D%3D"
          class="card-img-top"
          alt="about"
        />
        <div class="card-body bg-gray-200">
          <h5 class="card-title text-primary fw-bold">關於碁人館</h5>
          <p class="card-text">我們是由一群圍棋愛好者所組成</p>
          <p class="card-text">
            在這裡的每一個人都熱愛著圍棋 追求棋藝的同時也很講究所使用的棋具
          </p>
          <p class="card-text">就讓我們為您提供最適合您的棋具吧!!</p>
        </div>
      </div>
    </div>
  </div>
  <!-- 訂閱 -->
  <GoSubscribe />
</template>
<script>
export default {
  name: 'About'
}
</script>

<style lang="scss" scoped>
.bg-subTitle {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
}

.about-banner {
  background: url(https://storage.googleapis.com/vue-course-api.appspot.com/sheep-api/1646796873030.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Ngy3Nihlqd4yd9GJ0ARt%2BfbB6p2GvhemWH%2Fd2MfKIKuB%2BzK7F1QFYhlOuSVi4UaM%2FiNnvdKfRn8c9JJkNpU0UV1GlWoCyyySh4ULysOHBW3Bd36LZekr6NoR4ODdPBpYVkACyiepWs5CK%2BAzJkCkyCejO1OIoXF9JFdSuqxJdcWw6IzhRzXxcQc2O4x4Lx2ybvTFejhyklgW%2FQrg8ftEWmqIKrOW0niysYqfgGcrLv2AUw1bZjy%2FDVutxYFCivpkUZ7nkSOWbwG0XOjWrK3Pcjbxr1wvMKUdNdWUub66jhsmrMElv8Qf4dDpajUa6s6SU7ZKdkK6DHUzSvjPC6o4Rg%3D%3D);

  height: 400px;
  position: relative;
  background-size: cover;
  background-position: center center;
  opacity: 0.8;
  border-radius: 1rem;
  @media (max-width: 767.98px) {
    height: 250px;
  }
}

.about-us {
  height: 600px;
  @media (max-width: 767.98px) {
    height: 550px;
  }
  @media (max-width: 575.98px) {
    height: 500px;
  }
}
.bg-gray-200 {
  background: #e9ecef;
}

.about-img {
  position: absolute;
  top: 10%;
  left: 10%;
  z-index: 2;
  img {
    width: 50%;
  }
  @media (max-width: 1199.98px) {
    top: 5%;
    left: 5%;
  }
  @media (max-width: 991.98px) {
    left: 0;
  }
  @media (max-width: 767.98px) {
    img {
      width: 100%;
    }
  }
  @media (max-width: 575.98px) {
    display: none;
  }
}

.about-content {
  position: absolute;
  width: 50%;
  top: 55%;
  left: 50%;
  @media (max-width: 1199.98px) {
    top: 40%;
    left: 45%;
  }
  @media (max-width: 991.98px) {
    top: 35%;
  }
  @media (max-width: 767.98px) {
    top: 60%;
    left: 0;
    width: 100%;
  }
  @media (max-width: 575.98px) {
    display: none;
  }
}

.about-content-sm {
  height: 400px;
}
</style>
