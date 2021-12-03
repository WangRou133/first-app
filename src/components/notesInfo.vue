<template>
  <span class="title1">通知消息</span>
  <div class="note">
    <span>余额到账 28.60元</span>
    <span class="describe">来自从大学城轻轨站到重庆聪明蛋未来电竞酒店的行程，车费收款28.60元</span>
    <ion-icon class="close" name="close-outline"></ion-icon>
  </div>
  <div class="note">
    <span>订单取消</span>
    <span class="describe">预约时间为1月2日 18:30，从大学城轻轨站到磁器口正街的订单取消成功，取消原因：与乘客协商一致</span>
    <ion-icon class="close" name="close-outline"></ion-icon>
  </div>
</template>

<script lang="ts">
import {IonIcon} from "@ionic/vue";

export default {
  name: "notesInfo",
  components: {IonIcon}
}
</script>

<style scoped>
.title1 {
  position: relative;
  width: 333px;
  height: auto;
  font-size: 15px;
  color: rgba(234, 242, 255, 0.55);
  letter-spacing: 0;
  margin: 30px 0 4px 0;
}

.note .close {
  position: absolute;
  right: 0;
  top: 0;
  width: 32px;
  height: 32px;
  background-color: #ffffff1a;
}

.note {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  width: 345px;
  height: auto;
  background-color: #181C21;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 15px;
  font-size: 15px;
  color: #FFFFFF;
  font-weight: 400;
  margin-top: 16px;

}

.note .describe {
  position: relative;
  margin-top: 8px;
  font-size: 12px;
  max-height: 34px;
  color: rgba(234, 242, 255, 0.55);
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

</style>
