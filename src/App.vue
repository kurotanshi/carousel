<template>
  <Carousel
    :data="[{ id:'photos-1',href: '#',img: '../src/assets/img/photos-1.jpg' },{ id:'photos-2',href: '#',img: '../src/assets/img/photos-2.jpg' },{ id:'photos-3',href: '#',img: '../src/assets/img/photos-3.jpg' }]"
    :autoPlay="true"
    :delayTime="5000"
    :arrows="true"
    :dots="true"
    >
    <template #prev-btn><font-awesome-icon icon="chevron-left" /></template>
    <template #next-btn><font-awesome-icon icon="chevron-right" /></template>
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
  .fa-chevron-left,.fa-chevron-right{
    font-size: 35px;
    color: rgba($color: #ffffff, $alpha: .5);
    &:hover{
      color: rgba($color: #ffffff, $alpha: 1);
    }
  }
</style>
