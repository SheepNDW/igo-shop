<template>
  <footer class="app-footer">
    <div class="footer-info">
      <div class="container">
        <div
          class="slogan d-flex flex-column justify-content-center align-items-center flex-lg-row justify-content-lg-between"
        >
          <a href="javascript:;">
            <i class="material-icons-outlined">paid</i>
            <span>價格實惠</span>
          </a>
          <a href="javascript:;">
            <i class="material-icons-outlined">thumb_up</i>
            <span>品質保證</span>
          </a>
          <a href="javascript:;">
            <i class="material-icons-outlined">local_shipping</i>
            <span>全台配送</span>
          </a>
        </div>
        <!-- 版權資訊 -->
        <div class="copyright">
          <p>
            <RouterLink to="/products">線上商城</RouterLink>
            <RouterLink to="/about">關於我們</RouterLink>
            <RouterLink to="/admin">
              <i class="material-icons-outlined">manage_accounts</i>進入後台
            </RouterLink>
          </p>
          <p>本站僅為個人練習使用，無任何商業用途</p>
          <p>
            <RouterLink to="/">CopyRight © 碁人館</RouterLink>
            <a href="https://github.com/SheepNDW/igo-shop" target="_blank">
              <i class="fab fa-github fs-4"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style lang="scss" scoped>
.app-footer {
  a {
    text-decoration: none;
  }

  .footer-info {
    background-color: #333;
  }
  .slogan {
    height: 11.125rem;
    line-height: 3.625rem;
    padding: 3.75rem 6.25rem;
    border-bottom: 1px solid #434343;
    a {
      height: 58px;
      line-height: 58px;
      color: #fff;
      font-size: 1.75rem;
      i {
        font-size: 3.125rem;
        vertical-align: middle;
        margin-right: 0.625rem;
        font-weight: 100;
      }
      span {
        vertical-align: middle;
        text-shadow: 0 0 1px #333;
      }
    }
  }
  .copyright {
    height: 10.625rem;
    padding-top: 2.5rem;
    text-align: center;
    color: #999;
    font-size: 15px;
    p {
      line-height: 1;
      margin-bottom: 1.25rem;
    }
    a {
      color: #999;
      line-height: 1;
      padding: 0 0.625rem;
      border-right: 1px solid #999;
      &:last-child {
        border-right: none;
      }
    }
  }
}
@media (max-width: 991.98px) {
  .app-footer .slogan {
    height: 15rem;
    padding: 0 3.75rem 1rem 3.75rem;
    a {
      font-size: 1.5rem;
      margin-top: 1rem;
      i {
        font-size: 3rem;
      }
    }
  }
}
</style>
