<template>
  <div
    class="btn btn-secondary btn-top shadow d-flex justify-content-center align-items-center"
    @click="scrollToTop"
    :style="btnStyle"
  >
    <i class="material-icons-round">arrow_upward</i>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue'
export default {
  name: 'AppGoTop',
  setup() {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    const btnStyle = reactive({
      opacity: 0
    })

    onMounted(() =>
      window.addEventListener('scroll', () => {
        const windowY = window.scrollY
        if (windowY >= 300) {
          btnStyle.opacity = 1
        } else if (windowY < 300) {
          btnStyle.opacity = 0
        }
      })
    )

    return { scrollToTop, btnStyle }
  }
}
</script>

<style lang="scss" scoped>
.btn-top {
  position: fixed;
  width: 55px;
  height: 55px;
  right: 20px;
  bottom: 20px;
  border-radius: 50%;
  z-index: 9999;
  transform: scale(1);
  transition: all 0.2s;
  &:hover {
    transform: scale(1.1);
  }
}

@media (max-width: 576px) {
  .btn-top {
    width: 35px;
    height: 35px;

    i {
      font-size: 1rem;
    }
  }
}
</style>
