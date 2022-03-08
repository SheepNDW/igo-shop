<template>
  <header class="login-header d-flex align-items-center">
    <div class="container d-flex align-items-end justify-content-space-between">
      <h1 class="logo h1"><RouterLink to="/">碁人館</RouterLink></h1>
      <h3 class="sub"><slot /></h3>
      <RouterLink class="entry" to="/">
        進入網站首頁
        <i class="material-icons-outlined">arrow_forward_ios</i>
        <i class="material-icons-outlined">arrow_forward_ios</i>
      </RouterLink>
    </div>
  </header>
</template>

<script>
export default {
  name: 'LoginHeader'
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=RocknRoll+One&display=swap');
.login-header {
  height: 8rem;
  overflow-x: hidden;
  background: #fff;
  border-bottom: 1px solid #e4e4e4;
  a {
    text-decoration: none;
  }
  .logo {
    font-family: 'RocknRoll One', sans-serif;
  }
  .sub {
    flex: 1;
    font-size: 1.5rem;
    font-weight: normal;
    margin-left: 20px;
    color: #666;
  }
  .entry {
    width: 7.5rem;
    font-size: 1rem;
    i {
      font-size: 14px;
      color: #333;
      letter-spacing: -5px;
    }
  }
}
</style>
