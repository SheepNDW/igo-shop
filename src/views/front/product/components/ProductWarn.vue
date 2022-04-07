<template>
  <!-- 注意事項 -->
  <div class="row mb-3">
    <div class="product-warn">
      <h3>注意事項</h3>
      <p class="title">• 購買運費如何收取？</p>
      <ol>
        <li>
          單筆訂單金額(不含運費)滿3000元免運費；不滿3000元，每單收取宅配/快遞 80
          元 離島寄送 100 元
        </li>
      </ol>
      <br />
      <p class="title">• 使用什麼發貨方式?</p>
      <ol>
        <li>宅配：當天寄出，隔天送達；(離島2-4天)。</li>
        <li>
          黑貓到付：當天寄出，隔天送達，將錢給司機即可。(需額外收取手續費：30元~150元，請事先詢問)
        </li>
      </ol>
      <br />
      <p class="title">• 如何申請退貨?</p>
      <ol>
        <li>
          1.自收到商品之日起7日內，顧客可無條件申請退貨，退款將原路返還，不同的銀行處理時間不同，預計1-5個工作日到帳；
        </li>
        <li>2.書本和棋子等商品若無品質瑕疵的問題不支持退貨；</li>
        <li>
          3.退貨流程：
          確認收貨-申請退貨-客服審核通過-用戶寄回商品-倉庫簽收驗貨-退款審核-退款完成；
        </li>
        <li>
          4.欲退貨之商品，如為品質問題，退貨運費由本店承擔。因客戶個人原因產生的退貨，購買和寄回運費由客戶個人承擔。
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductWarn'
}
</script>

<style lang="scss" scoped>
.product-warn {
  margin-top: 20px;
  background: #fff;
  padding-bottom: 40px;
  h3 {
    height: 70px;
    line-height: 70px;
    border-bottom: 1px solid #f5f5f5;
    padding-left: 50px;
    font-size: 18px;
    font-weight: normal;
    margin-bottom: 10px;
  }
  .title {
    font-size: 14px;
    padding: 0px 25px;
    color: #333;
  }

  ol {
    li {
      list-style: none;
      font-size: 14px;
      color: #666;
    }
  }
}
</style>
