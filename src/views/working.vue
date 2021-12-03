<template>
  <div class="working">
    <div class="nav">
      <router-link to="/">
        <ion-img class="cancel"></ion-img>
      </router-link>
      <div class="title">前往目的地</div>
      <span class="delay">已等待00:48</span>
      <div class="more">更多</div>
    </div>
    <div class="apoint martop16">
      <div class="pointb"></div>
      <span>重庆聪明蛋未来电竞酒店</span>
    </div>
    <div class="apoint">
      <div class="pointy"></div>
      <span>四川外国语学院重庆第二外国语学校</span>
    </div>
    <div class="spline"></div>
    <div class="forpsng">
      <div class="away">
        <ion-img class="conecticon"></ion-img>
        <span>发信息</span>
      </div>
      <div class="linecolunm"></div>
      <div class="away">
        <ion-img class="conecticon"></ion-img>
        <span>联系顾客</span>
      </div>
    </div>
  </div>
  <div class="police">
    <ion-img class="policeicon"></ion-img>
    <span>紧急求助</span>
  </div>
  <ion-img class="navmap"></ion-img>
  <div class="nextstep">
    <div class="content">
      <div class="animation"></div>
      <span> 到达目的地，发起收款</span>
    </div>
  </div>
  <div class="mappart">
    <map class="map"></map>
  </div>
</template>

<script lang="ts">
import {IonImg} from '@ionic/vue';

export default {
  name: 'working',
  components: {IonImg},
}

</script>
<style>
html, body {
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 0;
  margin: 0;
  width: 375px;
  min-height: 100%;
  background-color: #FFFFFF;
  overflow-y: auto;
}

.mappart {
  position: fixed;
  width: 375px;
  top: 140px;
  bottom: 0;
  background-color: #181C21;
}

.mappart .map {
}

.working {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  width: 375px;
  background-color: #212429;
  z-index: 999;
}

.working .nav {
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  width: 375px;
  height: 44px;
  background-color: #212429;
  z-index: 999;
}

.working .nav .title {
  font-size: 18px;
  color: #FFFFFF;
}

.working .nav .delay {
  position: relative;
  font-size: 12px;
  color: rgba(234, 242, 255, 0.55);
  margin-left: 10px
}

.working .nav .cancel {
  width: 36px;
  height: 36px;
  margin-left: 15px;
  background-color: #FFFFFF1a;
}

.working .nav .more {
  position: absolute;
  right: 15px;
  font-size: 15px;
  color: rgba(234, 242, 255, 0.55);
}


.working .apoint {
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  margin-top: 8px;
  margin-left: 15px;
  font-size: 18px;
  color: #FFFFFF;
  font-weight: 600;
  background-color: #212429;
}

.working .martop16 {
  margin-top: 16px;
}

.working .apoint span {
  position: relative;
  width: 322px;
  word-break: break-all;
  word-wrap: break-word;
}

.working .pointb {
  position: relative;
  max-width: 8px;
  min-width: 8px;
  width: 8px;
  height: 8px;
  background: #4086FF;
  border-radius: 4px;
  margin-right: 15px;
  margin-top: 8px;
}

.working .pointy {
  position: relative;
  max-width: 8px;
  min-width: 8px;
  width: 8px;
  height: 8px;
  background: #FFB926;
  border-radius: 4px;
  margin-right: 15px;
  margin-top: 8px;
}

.working .spline {
  position: relative;
  width: 375px;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.05);
  margin-top: 20px;
}

.working .forpsng {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 375px;
  font-size: 15px;
  color: rgba(234, 242, 255, 0.55);
  background-color: #212429;
}

.working .forpsng .away {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 167px;
  padding: 18px 0;
  box-sizing: border-box;
}

.working .forpsng .conecticon {
  width: 24px;
  height: 24px;
  background: #ffffff1a;
  margin-right: 4px;
}

.working .forpsng .linecolunm {
  width: 1px;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.05);
}

.police {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 60px;
  height: 60px;
  margin-left: 15px;
  margin-top: 15px;
  border-radius: 30px;
  background: #CA150C;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.10);
  z-index: 999;
}

.police span {
  color: #FFFFFF;
  font-size: 9px;
}


.police .policeicon {
  position: relative;
  width: 32px;
  height: 32px;
  margin-top: 6px;
}

.navmap {
  position: fixed;
  bottom: 79px;
  right: 15px;
  width: 52px;
  height: 52px;
  border-radius: 10px;
  background-color: #2B323D;
  z-index: 999;

}

.nextstep {
  position: fixed;
  bottom: 0;
  width: 375px;
  height: 64px;
  background-color: #2677FF;
  z-index: 999;
}

.nextstep .content {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 375px;
  height: 64px;
  font-size: 22px;
  color: #FFFFFF;
  font-weight: 500;
  overflow-x: scroll;
}

.nextstep .animation {
  position: absolute;
  left: 0;
  width: 78px;
  height: 64px;
  background-color: #FFFFFF10;
}
</style>
