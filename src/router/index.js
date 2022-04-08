import { createRouter, createWebHashHistory } from 'vue-router'

const Layout = () => import('@/views/Layout')
const Home = () => import('@/views/front/Index')
const Products = () => import('@/views/front/product/Index')
const ProductDetail = () => import('@/views/front/product/components/ProductDetail')
const Cart = () => import('@/views/front/cart/Index')
const About = () => import('@/views/front/about/Index')
const IntroduceGo = () => import('@/views/front/introduce/Index')
const GoArticle = () => import('@/views/front/introduce/components/ArticleDetail')
const Checkout = () => import('@/views/front/pay/Checkout')
const PayOrder = () => import('@/views/front/pay/PayOrder')
const PaidResult = () => import('@/views/front/pay/Result')

const Login = () => import('@/views/front/login/Index')

const Dashboard = () => import('@/views/dashboard/Index')
const AdminProducts = () => import('@/views/dashboard/products/AdminProducts')
const AdminOrders = () => import('@/views/dashboard/orders/AdminOrders')
const AdminCoupon = () => import('@/views/dashboard/coupon/AdminCoupon')
const AdminArticle = () => import('@/views/dashboard/article/AdminArticle')

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/', component: Home },
      { path: 'products', component: Products, meta: { title: '線上商城' } },
      { path: 'product/:id', component: ProductDetail },
      { path: 'cart', component: Cart, meta: { title: '購物車' } },
      { path: 'about', component: About, meta: { title: '關於我們' } },
      { path: 'whatisgo', component: IntroduceGo, meta: { title: '認識圍棋' } },
      { path: 'whatisgo/:id', component: GoArticle },
      { path: 'checkout', component: Checkout, meta: { title: '填寫購買資料' } },
      { path: 'checkout/:id', component: PayOrder, meta: { title: '確認訂單' } },
      { path: 'checkout/result/:id', component: PaidResult, meta: { title: '交易完成' } }
    ]
  },
  // 登入
  {
    path: '/login',
    component: Login
  },
  // 後台
  {
    path: '/admin',
    component: Dashboard,
    redirect: '/admin/products',
    children: [
      { path: 'products', component: AdminProducts },
      { path: 'orders', component: AdminOrders },
      { path: 'coupon', component: AdminCoupon },
      { path: 'article', component: AdminArticle }
    ]
  },
  // 404 頁面
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/front/NotFound')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
  scrollBehavior() {
    return { left: 0, top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  // 需要登入的路由: 地址是以 /admin 開頭
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
  if (!token && to.path.startsWith('/admin')) {
    return next('/login?redirectUrl=' + encodeURIComponent(to.fullPath))
  }
  next()
})

export default router
