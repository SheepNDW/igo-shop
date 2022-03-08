<template>
  <li class="breadcrumb-item" :class="{ active: to ? false : true }">
    <RouterLink v-if="to" :to="to"><slot /></RouterLink>
    <span v-else><slot /></span>
  </li>
</template>

<script>
export default {
  name: 'GoBreadItem',
  props: {
    to: {
      type: [String, Object],
      default: ''
    }
  }
}
</script>
