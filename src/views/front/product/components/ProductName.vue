<template>
  <div class="h2">{{ product.title }}</div>
  <p class="desc">{{ product.description }}</p>
  <p class="price">
    <span>{{ $currency(product.price) }}</span>
    <span>{{ $currency(product.origin_price) }}</span>
  </p>
  <div class="card service mb-5">
    <div class="card-body">
      <dl>
        <dt>促銷</dt>
        <dd>輸入 iloveGo 即享 85 折優惠</dd>
      </dl>
      <dl>
        <dt>物流</dt>
        <dd>全台配送</dd>
      </dl>
      <dl>
        <dt>付款</dt>
        <dd>
          <span>信用卡</span>
          <span>ATM轉帳</span>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductName',
  props: {
    product: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
.desc {
  color: #999;
  margin-top: 10px;
}

.price {
  margin-top: 10px;
  span {
    &::before {
      content: 'NT$ ';
      font-size: 14px;
    }
    &:first-child {
      color: #cf4444;
      margin-right: 10px;
      font-size: 22px;
    }
    &:last-child {
      color: #999;
      text-decoration: line-through;
      font-size: 16px;
    }
  }
}

.service {
  background: #f5f5f5;
  max-width: 500px;
  border: none;
  dl {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    margin-bottom: 0;
    &:last-child {
      padding-bottom: 0px;
    }
    dt {
      width: 50px;
      color: #999;
    }
    dd {
      color: #666;
      margin-bottom: 0;
      &:last-child {
        span {
          margin-right: 10px;
          &::before {
            content: '•';
            color: #333;
            margin-right: 2px;
          }
        }
      }
    }
  }
}
</style>
