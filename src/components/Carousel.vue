<template>
  <div class="carousel-container">
    <div class="content"
      v-for="(item) in data"
      :key="item.id"
    >
      <!-- template 不會產生新元素 -->
      <template v-if="item.id === ('photos-' + show)">
        <a :href="item.href" ><img :src="item.img" alt=""></a>
      </template>
    </div>
    <div class="arrows-wrapper">
      <button class="prev" @click="toPrev"><slot name="prev-btn"></slot></button>
      <button class="next" @click="toNext"><slot name="next-btn"></slot></button>
    </div>
    <div class="dots-wrapper">
      <button
        v-for="num in len"
        :class="{'active': show === num }"
        @click="show = num"
      ></button>
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
  setup(props) {
    const state= reactive({
      show: 1,
      len: 0,
    })
    const toPrev = ()=> { state.show > 1 ? state.show-- : state.show = state.len }
    const toNext = ()=> { state.show < state.len ? state.show++ : state.show = 1 }
    onMounted(()=>{
      state.len = props.data.length;
    })
    return{ toPrev,toNext,...toRefs(state)}
  }
}
</script>
<style lang="scss" scoped>
.carousel-container{
  max-width: 1400px;
  height: 600px;
  margin: 0 auto;
  position: relative;
}
.content{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
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
.arrows-wrapper{
  width: 100%;
  height: 100%;
  .next,.prev{
    position: absolute;
    background-color: transparent;
    top: calc(50% - 35px);
    &:first-of-type{ left: 35px; }
    &:last-of-type{ right: 35px; }
  }
}
.dots-wrapper{
  display: flex;
  position: absolute;
  bottom: 0px;
  justify-content: center;
  width: 100%;
  button{
    margin: 20px 5px;
    width: 35px;
    height: 4px;
    background-color: rgba(255,255,255,.5);
    &.active{
      background-color: #ffffff;
    }
  }
}

</style>