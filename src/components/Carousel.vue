<template>
  <div class="carousel-container">
    <div class="item" v-for="(item) in data">
      <a :href="item.href"><img :src="item.img" alt=""></a>
    </div>
    <div class="arrows-wrapper">
      <button class="prev" @click="AddCount"><slot name="prev-btn"></slot></button>
      <button class="next"><slot name="next-btn"></slot></button>
    </div>
  </div>

</template>
<script>
import { onMounted,reactive,toRefs } from 'vue';
export default {
  props: {
    'data':{
      type: Array
    }
  },
  setup() {
    const state= reactive({
    })

    const AddCount = ()=> {
      console.log('yes');
    }
    return{ AddCount}
  }
}
</script>
<style lang="scss">
.carousel-container{
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
}
.item{
  width: 100%;
  height: 600px;
  >a{
    position: relative;
    float: left;
    width: 100%;
    height: 100%;
    >img{
      width:100%;
      height:100%;
      object-fit: cover;
      object-position: 50% 50%;
    }
  }
}
.next,.prev{
  position: absolute;
  background-color: transparent;
  top: calc(50% - 35px);
  &:first-of-type{
    left: 35px;
  }
  &:last-of-type{
    right: 35px;
    >img{
      transform: rotateY(180deg);
    }
  }
  > img{
    width: 35px;
    height: 35px;
  }
}
</style>