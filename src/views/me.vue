<template>
  <div class="me">
    <div class="nav">
      <router-link class="more" to="/">
          <ion-img></ion-img>
      </router-link>
    </div>
    <!--    -->
    <div class="user">
      <ion-img class="headimg" src=""></ion-img>
      <div class="userinfo">
        <span>王师傅</span>
        <div class="tag">
          <ion-img class="tagicon" src=""></ion-img>
          <span>100分</span>
        </div>
      </div>
      <span class="someinfo">渝A12345  愉客行重庆城区平台</span>
    </div>
    <!-- -->
    <div class="isrow">
      <div class="block">
        <ion-img class="maxixon" src=""></ion-img>
        <span class="mtit">钱包</span>
      </div>
      <div class="block">
        <ion-img class="maxixon" src=""></ion-img>
        <span class="mtit">线下收款</span>
      </div>
      <div class="block">
        <ion-img class="maxixon" src=""></ion-img>
        <span class="mtit">推荐下载</span>
      </div>

    </div>
    <!--    -->
    <div class="iscolunm">
      <div class="list">
        <ion-img class="minicon" :src="vv"></ion-img>
        <span class="tit">消息中心</span>
      </div>
      <div class="list">
        <ion-img class="minicon" :src="vv"></ion-img>
        <span class="tit">服务评分</span>
      </div>
      <div class="list">
        <ion-img class="minicon" :src="vv"></ion-img>
        <span class="tit">异常检查</span>
      </div>
      <div class="list">
        <ion-img class="minicon" :src="vv"></ion-img>
        <span class="tit">设置</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "me"

}
</script>

<style scoped>
html, body, #app {
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 0;
  margin: 0;
  width: 375px;
  min-height: 100%;
  background-color: #212429;
  overflow-y: auto;
}

.me {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  width: 375px;
  height: 100%;
  box-sizing: border-box;
  padding-bottom: 110px;
  overflow-y: scroll;
}

.me .nav {
  display: flex;
  position: fixed;
  top: 0;
  justify-content: flex-start;
  align-items: center;
  width: 375px;
  height: 44px;
  background-color: #212429;
  z-index: 999;
}

.me .more {
  position: relative;
  width: 36px;
  height: 36px;
  margin-left: 15px;
  background-color: #FFFFFF1a;
}

.me .user {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  width: 345px;
  justify-content: space-around;
  margin-top: 60px;
}

.me .user .headimg {
  position: absolute;
  right: 0;
  width: 56px;
  height: 56px;
  border-radius: 28px;
  background-color: #FFFFFF1a;
}

.me .user .userinfo {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  width: 259px;
  font-size: 22px;
  color: #FFFFFF;
}

.me .user .tag {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  margin-left: 8px;
  padding-right: 5px;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 10px;
  color: #FFB926;
  background-color: #F6F1E7;
}

.me .user .tagicon {
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: #FFFFFF1a;
  padding: 2px;
}

.me .user .someinfo {
  position: relative;
  width: 259px;
  font-size: 14px;
  color: rgba(234, 242, 255, 0.55);
  margin-top: 6px;
}

.me .isrow {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 345px;
  font-size: 22px;
  color: #FFFFFF;
  margin-top: 31px;
}

.me .isrow .block {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  width: 105px;
  height: 89px;
  background: #181C21;
  border-radius: 13px;
}

.me .isrow .maxixon {
  position: relative;
  width: 32px;
  height: 32px;
  margin-top: 14px;
  background-color: #FFFFFF1a;
}

.me .isrow .mtit {
  position: relative;
  font-size: 15px;
  color: #FFFFFF;
  text-align: center;
  margin-top: 8px;
}

.me .iscolunm {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 20px;
}

.me .iscolunm .list {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  padding: 21px 0;
  width: 333px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  margin-bottom: 1px;
}

.me .iscolunm .minicon {
  position: relative;
  width: 22px;
  height: 22px;
  background-color: #FFFFFF1a;
  margin-right: 21px;
}

.me .iscolunm .tit {
  position: relative;
  font-size: 15px;
  color: #FFFFFF;
}

</style>
