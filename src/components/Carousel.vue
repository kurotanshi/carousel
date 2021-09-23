<template>
  <div class="carousel-container"
    @mousemove="toggleTime = false"
    @mouseout="toggleTime = true"
  >
    <div class="content"
      v-for="(item) in data"
      :key="item.id"
    >
      <keep-alive>
        <transition-group :name="carouselAn">
          <template v-if="item.id === ('photos-' + show)">
            <a :href="item.href" ><img :src="item.img" alt="">{{carouselAn}}</a>
          </template>
        </transition-group>
      </keep-alive>
    </div>

    <div class="arrows-wrapper" v-show="arrows">
      <button class="prev" @click="toPrev"><slot name="prev-btn"></slot></button>
      <button class="next" @click="toNext"><slot name="next-btn"></slot></button>
    </div>
    <div class="dots-wrapper" v-show="dots">
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
    'data':{ type: Array },
    'autoPlay':{
      type: Boolean,
      default: false,
    },
    'delayTime':{
      type: Number,
      default: 3000,
    },
    'arrows':{
      type: Boolean,
      default: false,
    },
    'dots':{
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const state= reactive({
      show: 1,
      len: 0,
      toggleTime: true,
      carouselAn: 'next-move',
    })
    const toPrev = ()=> {
      state.carouselAn = 'prev-move';
      state.show > 1 ? state.show-- : state.show = state.len;
    }
    const toNext = ()=> {
      state.carouselAn = 'next-move';
      state.show < state.len ? state.show++ : state.show = 1;
    }
    const autoPlay = ()=>{
      setInterval(() => {
        if(state.toggleTime){ toNext();}
      }, props.delayTime);
    }
    onMounted(()=>{
      state.len = props.data.length;
      if(props.autoPlay){ autoPlay();}
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
    overflow-x: hidden;
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
  // an
  .next-move-enter-active,.next-move-leave-active,
  .prev-move-enter-active,.prev-move-leave-active{
    transition: all 1s linear;
  }
  .next-move-enter-from,.prev-move-leave-to{
    transform: translateX(100%);
  }
  .prev-move-enter-from,.next-move-leave-to{
    transform: translateX(-100%);
  }

</style>