<template>
  <div class="login-input">
    <form>
      <div 
        class="van-hairline--bottom input-container"
        :class="{'input-container-border':phoneShow}"
      >
        <label for="phone" class="label-item">
          <img src="@/assets/img/user/phone.png">
        </label>
        <input 
          type="text" 
          v-model="LoginData.phone" 
          @input="toNumber(LoginData.phone)" 
          @focus="focus('phoneShow')"
          @blur="phoneBlur"
          maxlength="11"
          ref="phone"
          id="phone" 
          class="input-item"
          placeholder="请输入11位手机号"
        >
        <img 
          src="@/assets/img/user/close.png" 
          class="close-btn" 
          v-if="phoneShow"
          @click="clearData('phone')"
        >
      </div>
      <div 
        class="van-hairline--bottom pwd-container"
        :class="{'input-container-border':pwdShow}"
      >
        <label for="password" class="label-item">
          <img src="@/assets/img/user/lock.png">
        </label>
        <input 
          :type="pwdType" 
          v-model="LoginData.password"
          id="password" 
          class="input-item"
          @focus="focus('pwdShow')"
          @blur="pwdBlur"
          ref='password'
          placeholder="请输入密码"
        >
        <img 
          src="@/assets/img/user/close.png" 
          class="close-btn" 
          v-if="pwdShow"
          @click.stop ="clearData('password')"
        >
        <span 
          class="iconfont  see-pwd" 
          :class="[seePwdShow ? 'icon-attention_light' : 'icon-attentionforbid']"
          v-if="pwdShow" 
          @click.prevent="seePwd()"
        ></span>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "LoginInput",
  props: {
    LoginMsg: Object //定义登录用的数据
  },
  data() {
    return {
      LoginData: this.LoginMsg, //赋值给loginData
      phoneShow: false, //手机号码输入框
      pwdShow: false, //密码输入框
      seePwdShow: true, //查看密码图标,
      pwdType: "password" //用来控制密码输入框
    };
  },
  methods: {
    //定义@input方法，规定输入只能输入数字
    toNumber(value) {
      this.LoginData.phone = value.replace(/\D/, "");
      //手机号码第一位应该不为0
      if (value.length === 1 && value === "0") {
        this.LoginData.phone = "";
      }
    },
    //选中登陆框，出现边框以及消失按钮
    focus(value) {
      this[value] = true;
    },
    //手机输入框失去焦点
    phoneBlur() {
      this.phoneShow = false;
    },
    //密码输入框失去焦点
    pwdBlur() {
      this.pwdShow = false;
    },
    //查看密码
    seePwd() {
      let pwd = this.$refs.password;
      pwd.focus(); //点击事件需要保留焦点
      this.seePwdShow = !this.seePwdShow; //查看密码图标
      this.pwdType = this.pwdType === "password" ? "text" : "password";
    },
    clearData(value) {
      this.LoginData[value] = "";
      this.$refs[value].focus();
    }
  }
};
</script>
<style lang="scss" scoped>
.login-input {
  margin-top: 10px;
}
</style>
