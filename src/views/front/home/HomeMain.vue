<template>
  <div class="home-main">
    <div class="container">
      <div class="row g-3 mt-0 mb-5 fade-out">
        <h2 class="fs-4 text-center p-5">學棋的路上，有我們相伴</h2>
        <div class="col-12 col-md-6">
          <img
            class="img-fluid"
            src="https://storage.googleapis.com/vue-course-api.appspot.com/sheep-api/1646290955333.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=QpN3DCKwvNdkuLf7oYwqZxo%2Ftt2pGMYaJVs4%2BOdN4KYcmmdKZjNip%2BBsGv%2FKWSZJYJKhQZ2zB5wNQaX2U%2FT6xasXj4EsmXOmjZzH5khO9%2BsO7wWIYBTBpWm3TlCVTaSHQiJyJcVUAJH8vxfkNFzyzy2w4rXwd%2B8SJLtNaV1D%2B2ZaRuU2necUyLJyjZF0IxquY1JWg2xm3UUDSEs7bkku%2FejkE4chvjbXEfRDPMAela60yqTaVfOHUjWbl6SLjY0OcH%2B1svtovAhrXA1CDT42oE8dHAH3kSlNJcP0xjLhJJFBk6YTNPyEzqs16vkozVK3bfU904pB6QFrSA0A3yJt8Q%3D%3D"
            alt=""
          />
        </div>
        <div
          class="col-12 col-md-6 p-3 p-md-5 d-flex justify-content-center align-items-center flex-column text-center lh-lg"
        >
          <h4 class="fs-5 text-primary fw-bold">各式精品棋具</h4>
          要成為一名好的棋手怎能沒有好的棋具
          <br />
          從經濟實惠到尊爵不凡
          <br />
          想要挑選棋具就來碁人館
          <RouterLink to="/products" class="btn btn-primary mt-3"
            >查看更多</RouterLink
          >
        </div>
      </div>
      <div class="row g-3 mb-5 flex-md-row-reverse">
        <div class="col-12 col-md-6">
          <img
            class="img-fluid"
            src="https://storage.googleapis.com/vue-course-api.appspot.com/sheep-api/1646566093699.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=WUi1MPla9Lt2t2hvJgYYVwzv%2BEGqRQ6lRyJk%2B%2FiEqSWj%2FA5mpjx442wGZPj7LfwJFNuOe4MOS%2FPZq%2B8%2BNb27%2FwXmzpzGTLBL1Lka0Rr33xXMbERuOg4GZ%2Fp4KtbkjyfIJiHho12PtXG7GuSozdDRPmV6M3g8THinZvtSgGfcSIXrvKpaT7Hfg7BtDOjOPgenzGajkTPg6GmAebNjAAYYlf0M0Go21ohO9vzJ%2BoYJJByg%2FF%2Bw5wBhB106W4YMn7rMqUBJw4KeiLkmT1akAmnYdaAkDBCnTZqgoTwJLR1%2FYgsFTPJN65gPa36cbPW9AsyhqxuJO6C542Wzrxj2fe7ANg%3D%3D"
            alt=""
          />
        </div>
        <div
          class="col-12 col-md-6 p-3 p-md-5 d-flex justify-content-center align-items-center flex-column text-center lh-lg"
        >
          <h4 class="fs-5 text-primary fw-bold">簡單的規則，不簡單的遊戲</h4>
          圍棋規則簡潔而優雅，但玩法卻千變萬化
          <br />
          欲精通其內涵需要大量的練習與鑽研
          <br />
          與此同時，圍棋被認為是目前世界上最複雜的棋盤遊戲之一
          <RouterLink to="/products" class="btn btn-primary mt-3"
            >查看更多</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeMain'
}
</script>

<style lang="scss" scoped>
.home-main {
  background: #fff;
}
</style>
