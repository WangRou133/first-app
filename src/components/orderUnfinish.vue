<template>
  <span class="title1">未完成订单</span>
  <div class="order">
    <div class="points">
      <div class="apoint">
        <div class="pointa"></div>
        <span>预约时间：今天 16:40</span>
      </div>
      <div class="apoint">
        <div class="pointb"></div>
        <span>大学城轻轨站</span>
      </div>
      <div class="apoint">
        <div class="pointc"></div>
        <span>磁器口古镇</span>
      </div>
    </div>
    <span class="status yellow">进行中</span>
  </div>
  <div class="order">
    <div class="points">

      <div class="apoint">
        <div class="pointb"></div>
        <span>大学城轻轨站</span>
      </div>
      <div class="apoint">
        <div class="pointc"></div>
        <span>磁器口古镇</span>
      </div>
    </div>
    <span class="status">进行中</span>
  </div>
</template>

<script lang="ts">
export default {
  name: "orderUnfinish"
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

.order {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
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

.order .points {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}

.order .apoint {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  margin: 3px 0;
}

.order .pointa {
  position: relative;
  width: 8px;
  height: 8px;
  background: rgba(234, 242, 255, 0.55);
  border-radius: 4px;
  margin-right: 12px;
}

.order .pointb {
  position: relative;
  width: 8px;
  height: 8px;
  background: #4086FF;
  border-radius: 4px;
  margin-right: 12px;
}

.order .pointc {
  position: relative;
  width: 8px;
  height: 8px;
  background: #FFB926;
  border-radius: 4px;
  margin-right: 12px;
}

.order .status {
  position: relative;
  font-size: 18px;
  color: #4086FF;
  letter-spacing: 0;
}

.order .yellow {
  color: #FFB926;
}
</style>
