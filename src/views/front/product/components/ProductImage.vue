<template>
  <div class="image-box col-12 col-lg-5 position-relative">
    <!-- 大圖 -->
    <div
      v-show="isShow"
      class="large"
      :style="[{ backgroundImage: `url(${images[currIndex]})` }, largePosition]"
    ></div>
    <!-- 中圖 -->
    <div ref="target" class="middle d-flex align-items-center">
      <img class="rounded-2 w-100" :src="images[currIndex]" alt="" />
      <!-- 遮罩色塊 -->
      <div v-show="isShow" class="layer" :style="layerPosition"></div>
    </div>
    <!-- 小圖 -->
    <div class="small col-12 flex-nowrap py-1 overflow-auto mb-3">
      <ul class="row list-unstyled flex-nowrap m-0">
        <li class="col-2 me-1" v-for="(img, i) in images" :key="img">
          <img
            class="w-100 p-0 rounded"
            :class="{ active: i === currIndex }"
            @mouseenter="currIndex = i"
            :src="img"
            alt=""
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive, ref, watch } from 'vue'
import { useMouseInElement } from '@vueuse/core'
export default {
  name: 'ProductImage',
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    // 當前預覽圖索引
    const currIndex = ref(0)

    // 是否顯示遮罩層和大圖
    const isShow = ref(false)

    // 遮罩座標 (css樣式)
    const layerPosition = reactive({
      left: 0,
      top: 0
    })

    // 大圖背景定位 (css樣式)
    const largePosition = reactive({
      backgroundPositionX: 0,
      backgroundPositionY: 0
    })

    // 使用 useMouseInElement 得到基於元素左上角的座標和是否離開元素數據
    const target = ref(null)
    const { elementX, elementY, isOutside } = useMouseInElement(target)
    watch([elementX, elementY, isOutside], () => {
      // isOutside 為 false 時才顯示
      isShow.value = !isOutside.value

      // 計算座標
      const tempPosition = { x: 0, y: 0 }

      if (elementX.value < 100) tempPosition.x = 0
      else if (elementX.value > 300) tempPosition.x = 200
      else tempPosition.x = elementX.value - 100

      if (elementY.value < 100) tempPosition.y = 0
      else if (elementY.value > 300) tempPosition.y = 200
      else tempPosition.y = elementY.value - 100

      // 給樣式賦值
      layerPosition.left = tempPosition.x + 'px'
      layerPosition.top = tempPosition.y + 'px'
      largePosition.backgroundPositionX = -2 * tempPosition.x + 'px'
      largePosition.backgroundPositionY = -2 * tempPosition.y + 'px'
    })

    return {
      currIndex,
      isShow,
      layerPosition,
      largePosition,
      target
    }
  }
}
</script>

<style lang="scss" scoped>
.image-box {
  z-index: 500;
  .large {
    display: none;
    position: absolute;
    top: 0;
    left: 420px;
    width: 400px;
    height: 400px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-repeat: no-repeat;
    background-size: 800px 800px;
    background-color: #f8f8f8;
    @media (min-width: 992px) {
      display: block;
    }
  }
  .middle {
    height: 400px;
    background: #f5f5f5;
    position: relative;
    cursor: move;
    .layer {
      display: none;
      position: absolute;
      left: 0;
      top: 0;
      width: 200px;
      height: 200px;
      background: rgba(0, 0, 0, 0.2);
      @media (min-width: 992px) {
        display: block;
      }
    }
    img {
      object-fit: cover;
      object-position: center;
    }
    @media (min-width: 450px) {
      width: 400px;
    }
  }
  .small ul li img {
    cursor: pointer;
    &:hover,
    &.active {
      border: 2px solid #333;
    }
  }
}
</style>
