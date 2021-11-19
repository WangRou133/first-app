<template>
  <ion-page>
    <ion-card>
      <ion-card-header>
        <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
        <ion-card-title>Card Title</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <p>
          Here’s a small text description for the card component.
          Nothing more, nothing less.
        </p>
        <ion-item>
          <ion-button fill="solid">Action</ion-button>
          <ion-icon :icon="heart" slot="end"></ion-icon>
          <ion-icon :icon="share" slot="end"></ion-icon>
        </ion-item>
      </ion-card-content>
    </ion-card>
  </ion-page>
</template>

<script lang="ts">
import {IonImg, IonCard, IonItem, IonButton, IonIcon, IonPage} from '@ionic/vue';
import {heart, share} from 'ionicons/icons';

export default {

  name: "test1",
  components: { IonCard, IonItem, IonButton, IonIcon, IonPage},
  setup() {
    return {
      heart,
      share,
    }
  }
}
</script>

<style scoped>

</style>
