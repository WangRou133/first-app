<template>
  <div class="home">
    <div class="nav">
      <router-link to="/me">
        <ion-img class="more"></ion-img>
      </router-link>
    </div>
    <div class="workdate">
      <div class="adate">
        <div class="num"> 168.00</div>
        <span class="name">今日收入(元)</span>
      </div>
      <div class="adate">
        <div class="num"> 18
          <span class="fenhao"> /</span> 5.2
        </div>
        <span class="name">今日服务(单量/小时)</span>
      </div>
    </div>
    <div class="entrances">
      <div class="aentrance">
        <ion-img class="peitu" :src="vv"></ion-img>
        <span class="biaoti">帮助教程</span>
        <span class="describe">教程/异常检测</span>
      </div>
      <div class="aentrance">
        <ion-img class="peitu" :src="vv"></ion-img>
        <span class="biaoti">营收中心</span>
        <span class="describe">统计/订单中心</span>
      </div>
    </div>
    <div class="setting">
      <div class="entset">
        <span class="set">听单设置</span>
        <ion-img class="more"></ion-img>
      </div>
      <div class="status">
        <span class="tag">距你4公里内</span>
        <span class="tag">实时单</span>
        <span class="tag">预约 07:00-21:00</span>
      </div>
    </div>
    <!--    默认-->
    <div class="invitation">
      <span>亲爱的车主，欢迎加入愉客行! </span>
      <span class="invitwords">渝客行为您提供海量出行订单，点击“接单上班”，开启你的线上接单之旅吧！</span>
    </div>
    <!--  通知  -->
    <notesInfo></notesInfo>
    <!--  订单  -->
    <orderUnfinish></orderUnfinish>
    <div class="gowork">
      <ion-img class="taxi" :src="vv"></ion-img>
      <router-link to="/getorder">
        <div class="work">
          <span>接单中</span>
        </div>
      </router-link>
      <div class="status">下班</div>
    </div>
  </div>
</template>

<script lang="ts">
import {IonImg} from '@ionic/vue';
import orderUnfinish from "@/components/orderUnfinish.vue";
import notesInfo from "@/components/notesInfo.vue";

export default {
  name: 'home',
  components: {IonImg, orderUnfinish, notesInfo},
}

</script>
<style>
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

.home {
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

.home .nav {
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

.home .more {
  width: 36px;
  height: 36px;
  margin-left: 15px;
  background-color: #FFFFFF1a;
}

.home .workdate {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 64px;
  width: 375px;
}

.home .workdate .adate {
  display: flex;
  position: relative;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  width: 160px;
  margin: 0 7px;
}

.home .workdate .name {
  position: relative;
  font-size: 12px;
  color: rgba(234, 242, 255, 0.55);
  letter-spacing: 0;
  margin-top: 2px;
  font-weight: 400;
}

.home .workdate .num {
  display: flex;
  position: relative;
  font-size: 34px;
  color: #FFFFFF;
  font-weight: 600;
}

.home .workdate .fenhao {
  font-size: 28px;
  color: #FFFFFF;
  font-weight: 400;
  margin: 0 4px;
}

.home .entrances {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 24px;
  width: 375px;
}

.home .entrances .aentrance {
  display: flex;
  position: relative;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  width: 166px;
  height: 82px;
  margin: 0 7px;
  background: #2677FF;
  border-radius: 10px;
}

.home .entrances .peitu {
  position: absolute;
  width: 42px;
  height: 42px;
  margin-left: 15px;
  background-color: #FFFFFF;
  border-radius: 8px;
}

.home .entrances .biaoti {
  margin-left: 67px;
  font-size: 16px;
  color: #FFFFFF;
  font-weight: 600;
}

.home .entrances .describe {
  margin-top: 2px;
  margin-left: 67px;
  font-size: 12px;
  color: rgba(234, 242, 255, 0.65);
  font-weight: 400;
}

.home .setting {
  display: flex;
  position: relative;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  width: 345px;
  padding: 15px 0 20px 0;
  background: #2B323D;
  border-radius: 10px;
  margin-top: 20px;
}

.home .setting .entset {
  display: flex;
  position: relative;
  align-items: start;
  justify-content: space-between;
  flex-direction: row;
  width: 335px;
}

.home .setting .set {
  position: relative;
  font-size: 12px;
  color: rgba(234, 242, 255, 0.55);
  font-weight: 400;
  margin-left: 15px;
}

.home .setting .more {
  width: 16px;
  height: 16px;
  background-color: #FFFFFF20;
}

.home .setting .status {
  display: flex;
  position: relative;
  align-items: start;
  flex-direction: row;
  margin: 12px 6px 0 6px;
}

.home .setting .tag {
  position: relative;
  border: 0.5px solid rgba(255, 255, 255, 0.2);
  border-radius: 13px;
  font-size: 12px;
  padding: 4px 10px;
  color: #FFFFFF;
  font-weight: 400;
  margin-left: 9px;
}

.home .invitation {
  display: flex;
  position: relative;
  align-items: start;
  flex-direction: column;
  width: 333px;
  font-size: 15px;
  color: #FFFFFF;
  letter-spacing: 0;
  margin-top: 30px;
}

.home .invitation .invitwords {
  position: relative;
  font-size: 12px;
  color: rgba(234, 242, 255, 0.55);
  letter-spacing: 0;
  line-height: 20px;
  margin-top: 16px;
}

.home .gowork {
  display: flex;
  position: fixed;
  justify-content: space-around;
  flex-direction: row;
  bottom: 30px;
  width: 345px;
  height: 56px;
}

.home .gowork .taxi {
  position: relative;
  width: 56px;
  height: 56px;
  border-radius: 28px;
  background-color: #282E38;
  z-index: 999;
}

.home .gowork .work {
  background: #2677FF;
  border-radius: 28px;
  height: 56px;
  width: 147px;
  font-size: 18px;
  color: #FFFFFF;
  text-align: center;
  line-height: 56px;
}

.home .gowork .status {
  position: relative;
  width: 56px;
  height: 56px;
  border-radius: 28px;
  background-color: #282E38;
  font-size: 15px;
  line-height: 56px;
  color: #FFFFFF;
  text-align: center;
}
</style>
