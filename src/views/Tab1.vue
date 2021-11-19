<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">我是Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
      <ExploreContainer name="我是Tab 1 page" />
      <!-- 照相按钮 -->
      <ion-fab class="fab1" vertical="bottom" horizontal="center" slot="fixed" >
        <ion-icon :icon="alarm" />
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon} from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import {ellipse, square, triangle,alarm} from "ionicons/icons";

export default  {
  name: 'Tab1',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent,IonPage,IonIcon },
  setup() {
    return {
      alarm,
    }
  }
}

</script>
<style>
.fab1{
  /*background-color: #0b9b06;*/
}
</style>
