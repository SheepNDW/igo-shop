<template>
  <div class="bg-white">
    <div class="go-footer">
      <div class="go-footer-inner PC">
        <div class="left">
          <div class="gf-siteinfo">
            <p class="gf-siteinfo-name">
              <a href="#"><span class="gf-siteinfo-name">碁人館</span></a>
            </p>
            <p class="d-flex flex-column">
              <span class="me-2 d-flex align-items-center mb-2">
                <i class="material-icons-outlined me-2">email</i
                >example@gmail.com
              </span>
              <span class="d-flex align-items-center mb-2">
                <i class="material-icons-outlined me-2">call</i>02-1234-5678
              </span>
            </p>
          </div>
          <div class="gf-other-items d-flex mt-1">
            <p class="gf-small en me-2">
              <small>本站僅為個人練習使用，無任何商業用途</small>
            </p>
          </div>
          <div class="gf-other-items d-flex">
            <p class="gf-small en me-2">
              <small>CopyRight © 2022 碁人館</small>
            </p>
            <ul class="list-unstyled">
              <li>
                <a href="https://github.com/SheepNDW/igo-shop" target="_blank"
                  ><i class="fab fa-github fs-4"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="right">
          <div class="gf-other">
            <ul class="gf-nav">
              <li>
                <RouterLink to="/whatisgo">
                  <i class="icon material-icons-round">chevron_right</i>
                  認識圍棋
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/about">
                  <i class="icon material-icons-round">chevron_right</i>
                  關於我們
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/products"
                  ><i class="icon material-icons-round">chevron_right</i
                  >線上商城</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/admin">
                  <i class="icon material-icons-outlined">manage_accounts</i>
                  進入後台
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="go-footer-inner Mobile">
        <div class="gf-siteinfo">
          <p class="gf-siteinfo-name">
            <a href="#"><span class="gf-siteinfo-name">碁人館</span></a>
          </p>
          <p class="d-flex flex-column">
            <span class="me-2 d-flex align-items-center mb-2">
              <i class="material-icons-outlined me-2">email</i>example@gmail.com
            </span>
            <span class="d-flex align-items-center mb-2">
              <i class="material-icons-outlined me-2">call</i>02-1234-5678
            </span>
          </p>
        </div>
        <div class="gf-other">
          <ul class="gf-nav">
            <li>
              <RouterLink to="/whatisgo">
                <i class="icon material-icons-round">chevron_right</i>
                認識圍棋
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/about">
                <i class="icon material-icons-round">chevron_right</i>
                關於我們
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/products"
                ><i class="icon material-icons-round">chevron_right</i
                >線上商城</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/admin">
                <i class="icon material-icons-outlined">manage_accounts</i>
                進入後台
              </RouterLink>
            </li>
          </ul>
        </div>
        <div class="gf-other-items d-flex mt-1">
          <p class="gf-small en me-2">
            <small>本站僅為個人練習使用，無任何商業用途</small>
          </p>
        </div>
        <div class="gf-other-items d-flex">
          <p class="gf-small en me-2">
            <small>CopyRight © 2022 碁人館</small>
          </p>
          <ul class="list-unstyled">
            <li>
              <a href="https://github.com/SheepNDW/igo-shop" target="_blank"
                ><i class="fab fa-github fs-4"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style lang="scss" scoped>
.PC {
  display: none;
}
@media (min-width: 1280px) {
  .PC {
    display: block;
  }
  .Mobile {
    display: none !important;
  }
}
.go-footer {
  position: relative;
  margin: 0 auto;
  box-sizing: border-box;
  z-index: 2;
}

.go-footer-inner {
  position: relative;
  max-width: 1320px;
  margin: 0 auto;
  padding: 40px 30px;
}

.PC .go-footer-inner {
  display: flex;
  flex-direction: column-reverse;
}

.go-footer-inner > * {
  margin-bottom: 10px;
}

.go-footer-inner > *:last-child {
  margin-bottom: 0;
}

@media (min-width: 1280px) {
  .go-footer {
    width: calc(100% - 180px);
  }

  .go-footer-inner {
    padding: 70px 20px;
    display: flex;
    flex-direction: row;
    .left {
      margin-right: 600px;
    }
    .right {
      padding-top: 2.6rem;
    }
  }
}

/* ------------------------- */

.gf-nav {
  list-style: none;
  margin: 0 0 20px;
  padding: 0;
}

.gf-nav a {
  display: inline-flex;
  align-items: center;
}

.gf-nav .icon {
  flex-shrink: 0;
  display: block;
  width: 24px;
  height: 24px;
  stroke-width: 1.3;
  margin-left: -8px;
  transform: translateX(0);
  transition: transform 0.1s cubic-bezier(0.15, 0.85, 0.5, 2);
}
.Mobile {
  .gf-nav .icon {
    margin-left: 0;
    margin-right: 0.5rem;
  }
}

.gf-nav a:hover .icon {
  transform: translateX(6px);
}

@media (min-width: 1280px) {
  .gf-nav {
    margin-bottom: 0;

    li {
      margin-bottom: 1rem;
    }
  }
}

/* ------------------------- */

.gf-siteinfo {
  line-height: 2;
  font-size: 1.1rem;
}

.gf-siteinfo > *:last-child {
  margin-bottom: 0;
}

.gf-siteinfo-name {
  margin-bottom: 0.5em;
  font-size: 1.4rem;
  font-weight: bolder;
}

@media (min-width: 1280px) {
  .gf-siteinfo {
    padding-bottom: 0;
  }
}

/* ------------------------- */

.gf-other {
  position: relative;
  border-top: none;
  font-size: 1.1rem;
}

.gf-other > * {
  position: relative;
  z-index: 2;
}

.gf-small {
  font-size: 1rem;
  line-height: 1.5;
}

.gf-small small {
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  opacity: 0.55;
}

@media (min-width: 1280px) {
  .gf-other .gf-nav {
    align-items: center;
  }

  .gf-other .gf-nav > * {
    margin-right: 2em;
  }

  .gf-small {
    font-size: 1.1rem;
  }
}
</style>
