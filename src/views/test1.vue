<template>
  <div class="psgcard">
    <div class="distance">
      <span>距你1.26公里</span>
      <span class="redpackage">小费 3元</span>
    </div>
    <span class="paydistance">总里程 28.6公里</span>
    <div class="apoint">
      <div class="pointb"></div>
      <span>重庆聪明蛋未来电竞酒店</span>
    </div>
    <div class="apoint mab48">
      <div class="pointy"></div>
      <span>四川外国语学院重庆第二外国语学校</span>
    </div>
    <div class="others">
      <ion-img src="" class="othericon"></ion-img>
      <span class="othtext2">今天 16:00</span>
    </div>
    <div class="others">
      <ion-img src="" class="othericon"></ion-img>
      <span class="othtext1">可拼车 3人</span>
    </div>
    <div class="others">
      <ion-img src="" class="othericon"></ion-img>
      <span class="othtext1">孕妇/老人/小孩  打表来接</span>
    </div>
  </div>
</template>

<script lang="ts">
import {IonImg} from '@ionic/vue';
// import {heart, share} from 'ionicons/icons';

export default {

  name: "test1",
  components: {IonImg},
  setup() {
    return {
      // heart,
      // share,
    }
  }
}
</script>

<style >
html, body {
  position: relative;
  padding: 0;
  margin: 0;
  width: 750px;
  height: 100%;
  background-color: #212429;
}

.psgcard {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  border-radius: 30px;
  margin: 48px auto 0 auto;
  padding: 64px 42px 84px 42px;
  background-color: #181C21;
  width: 690px;
  height: auto;
  overflow: hidden;
  box-sizing: border-box;
  /*word-break: break-all;*/
  /*word-wrap: break-word;*/
}

.psgcard .distance {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: 60px;
  color: #FFFFFF;
}

.psgcard .redpackage {
  position: relative;
  background: #CA150C;
  border-radius: 12px;
  padding: 9px 18px;
  font-size: 30px;
  color: #FFFFFF;
  margin-left: 24px;
}

.psgcard .paydistance {
  position: relative;
  margin-top: 6px;
  font-size: 30px;
  color: rgba(234, 242, 255, 0.55);
  letter-spacing: 0;
  text-align: center;
  margin-bottom: 72px;
}
.psgcard .mab48{
  margin-bottom: 48px;
}
.psgcard .apoint {
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  margin-bottom: 28px;
  font-size: 44px;
  color: #FFFFFF;
}

.psgcard .pointb span {
  position: relative;
  width: 560px;
  word-break: break-all;
  word-wrap: break-word;
}

.psgcard .pointb {
  position: relative;
  width: 16px;
  height: 16px;
  background: #4086FF;
  border-radius: 8px;
  margin-right: 30px;
  margin-top: 23px;
}

.psgcard .pointy {
  position: relative;
  max-width: 16px;
  min-width: 16px;
  width: 16px;
  height: 16px;
  background: #FFB926;
  border-radius: 8px;
  margin-right: 30px;
  margin-top: 23px;
}

.psgcard .others {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 36px;
}

.psgcard .othericon {
  position: relative;
  width: 64px;
  height: 64px;
  background: #ccd4d9;
  margin-right: 36px;
}

.psgcard .othtext1 {
  position: relative;
  font-size: 30px;
  color: #FFFFFF;
}

.psgcard .othtext2 {
  position: relative;
  font-size: 36px;
  color: #FFB926;
}
</style>
