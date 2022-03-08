<template>
  <footer class="login-footer">
    <div class="container">
      <p>本站僅為個人練習使用，無任何商業用途</p>
      <p>
        CopyRight &copy; 碁人館
        <a href="https://github.com/SheepNDW/igo-shop" target="_blank">
          <i class="fab fa-github fs-4"></i>
        </a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'LoginFooter'
}
</script>

<style lang="scss" scoped>
.login-footer {
  overflow-x: hidden;
  padding: 30px 0 50px;
  background: #fff;
  p {
    text-align: center;
    color: #999;
    padding-top: 20px;
  }
}
</style>
