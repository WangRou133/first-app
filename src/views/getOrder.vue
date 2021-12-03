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
      <ion-img :src="items[0]" class="othericon"></ion-img>
      <span class="othtext2">今天 16:00</span>
    </div>
    <div class="others">
      <ion-img :src="items[1]" class="othericon"></ion-img>
      <span class="othtext1">可拼车 3人</span>
    </div>
    <div class="others">
      <ion-img :src="items[2]" class="othericon"></ion-img>
      <span class="othtext1">孕妇/老人/小孩  打表来接</span>
    </div>
  </div>
  <div class="map_area" v-show="getmap">
    <div class="map"></div>
  </div>
  <div class="chose">
    <div class="zuoyou">
      <ion-img class="zyimg" :src="ahha"></ion-img>
      <span>忽略此单</span>
    </div>
    <router-link to="/working">
      <div class="getorder">
        <div class="inring">
          <span class="gettext">抢单</span>
          <span class="keeping">9</span>
        </div>
      </div>
    </router-link>
    <div class="zuoyou" >
      <ion-img class="zyimg" :src="hah"></ion-img>
      <span>查看地图</span>
    </div>
  </div>
</template>

<script lang="ts">
import {IonImg} from '@ionic/vue';
// import {heart, share} from 'ionicons/icons';

export default {
  name: "getOrder",
  components: {IonImg},

  setup() {
    const items = ['../icon/time.png', '../icon/passenger', '../icon/remarks.png'];
    const getmap = false;
    return {
      items,
      getmap,
    }
  },
  methods: {}
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
  height: 100%;
  background-color: #212429;
}

.map_area {
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 146px;
  bottom: 0;
  width: 375px;
  background-color: #212429;
}

.map_area .map {
  position: absolute;
  top: 0;
  bottom: 174px;
  width: 345px;
  box-sizing: border-box;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  background-color: #000000;
}

.chose {
  display: flex;
  position: absolute;
  justify-content: center;
  bottom: 30px;
  align-items: center;
  flex-direction: row;
  width: 375px;
}

.chose .getorder {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 108px;
  height: 108px;
  margin: 0 17px;
  border-radius: 53px;
  border: 8px solid rgba(21, 97, 225, 0.10);
  box-sizing: border-box;
}

.chose .inring {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 84px;
  height: 84px;
  background-color: #1561E1;
  border-radius: 42px;
}

.chose .gettext {
  position: relative;
  font-size: 22px;
  color: #FFFFFF;
  font-weight: 400;
}

.chose .keeping {
  position: relative;
  font-size: 18px;
  color: #FFFFFF;
  text-align: center;
  font-weight: 400;
}

.chose .zuoyou {
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 22px 16px 0 16px;
}

.chose .zyimg {
  width: 64px;
  height: 64px;
  margin-bottom: 5px;
  border-radius: 32px;
  background-color: #FFFFFF;
}

.chose span {
  position: relative;
  font-size: 12px;
  color: rgba(234, 242, 255, 0.55);
  text-align: center;
}

.psgcard {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  border-radius: 15px;
  margin: 24px auto 0 auto;
  padding: 32px 21px 42px 21px;
  background-color: #181C21;
  width: 345px;
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
  font-size: 15px;
  color: #FFFFFF;
}

.psgcard .redpackage {
  position: relative;
  background: #CA150C;
  border-radius: 6px;
  padding: 5px 9px;
  font-size: 15px;
  color: #FFFFFF;
  margin-left: 12px;
}

.psgcard .paydistance {
  position: relative;
  margin-top: 3px;
  font-size: 15px;
  color: rgba(234, 242, 255, 0.55);
  letter-spacing: 0;
  text-align: center;
  margin-bottom: 36px;
}

.psgcard .mab48 {
  margin-bottom: 24px;
}

.psgcard .apoint {
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  margin-bottom: 14px;
  font-size: 22px;
  color: #FFFFFF;
}

.psgcard .pointb span {
  position: relative;
  width: 265px;
  word-break: break-all;
  word-wrap: break-word;
}

.psgcard .pointb {
  position: relative;
  max-width: 8px;
  min-width: 8px;
  width: 8px;
  height: 8px;
  background: #4086FF;
  border-radius: 4px;
  margin-right: 15px;
  margin-top: 12px;
}

.psgcard .pointy {
  position: relative;
  max-width: 8px;
  min-width: 8px;
  width: 8px;
  height: 8px;
  background: #FFB926;
  border-radius: 4px;
  margin-right: 15px;
  margin-top: 12px;
}

.psgcard .others {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 18px;
}

.psgcard .othericon {
  position: relative;
  width: 32px;
  height: 32px;
  margin-right: 18px;
}

.psgcard .othtext1 {
  position: relative;
  font-size: 15px;
  color: #FFFFFF;
}

.psgcard .othtext2 {
  position: relative;
  font-size: 18px;
  color: #FFB926;
}
</style>
