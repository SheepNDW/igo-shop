<template>
  <div class="pay-step p-3">
    <GoSteps :active="activeIndex">
      <GoStepsItem title="確認訂單" />
      <GoStepsItem title="進行付款" />
      <GoStepsItem title="完成購買" />
    </GoSteps>
  </div>
</template>

<script>
export default {
  name: 'PayStep',
  props: {
    activeIndex: {
      type: Number,
      default: 1
    }
  }
}
</script>
