<template>
  <Carousel>
    <template #prev-btn><img src="./assets/img/arrows.svg" alt=""></template>
    <template #next-btn><img src="./assets/img/arrows.svg" alt=""></template>

  </Carousel>
</template>
<script>
  import Carousel from './components/Carousel.vue'
  export default {
    components: {
      Carousel,
    }
  }
</script>
<style lang="scss">

</style>
