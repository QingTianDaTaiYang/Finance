<template>
  <div class="pay-result">
    <common-header title="支付结果" class="header"></common-header>
    <div class="result-box">
      <img 
        src="@/assets/img/pay/success.png" 
        class="result-img" >
      <div class="result-text">支付成功</div>
    </div>
    <footer class="footer">
      <van-button 
        class="button-style" 
        type="warning"
        @click="submitPay"
      >查看订单</van-button>
      <van-button 
        v-if="!resultImg"
        class="button-bottom" 
        type="warning"
         plain
         @click="$router.push('/financingList')"
      >返回列表</van-button>
    </footer>
  </div>
</template>
 
<script>
import CommonHeader from "common/CommonHeader";

export default {
  name: "PayResult",
  components: {
    CommonHeader
  },
  data() {
    return {};
  },
  created() {},
  computed: {},
  activated() {},
  methods: {
    submitPay() {
      //成功后跳转到理财列表
      this.$router.push("/my-investment");
    }
  }
};
</script>
<style lang="scss" scoped>
.pay-result {
  .header {
    border-bottom: 2px solid #e4c471;
  }
  .result-box {
    margin-top: 115px;
    text-align: center;
  }
  .result-img {
    width: 88px;
  }
  .result-text {
    font-size: 15px;
    color: #5bbc11;
  }
  .footer {
    position: fixed;
    box-sizing: border-box;
    bottom: 25px;
    width: 100%;
    padding: 15px;
    .button-style {
      width: 100%;
    }
    .button-bottom {
      width: 100%;
      margin-top: 10px;
    }
  }
}
</style>
