<template>
  <nav aria-label="Page navigation">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ disabled: !pages.has_pre }">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click.prevent="changePager(pages.current_page - 1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        class="page-item"
        :class="{ active: page === pages.current_page }"
        v-for="page in pages.total_pages"
        :key="page + 'page'"
      >
        <a class="page-link" href="#" @click.prevent="changePager(page)">{{
          page
        }}</a>
      </li>
      <li class="page-item" :class="{ disabled: !pages.has_next }">
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          @click.prevent="changePager(pages.current_page + 1)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'GoPagination',
  props: {
    pages: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { emit }) {
    const changePager = (page) => {
      emit('change-page', page)

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    return { changePager }
  }
}
</script>
