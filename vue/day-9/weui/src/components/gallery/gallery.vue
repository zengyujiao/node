<template>
  <transition name="fade">
    <div class="weui-gallery-iop" v-show="galleryState.isShow">
      <span class="weui-gallery__img" :style="{backgroundImage: `url(${galleryState.imgUrl})`}"></span>
      <div @click="setGalleryState({imgUrl:'',isShow:false})" class="weui-gallery__opr">
        <a href="javascript:" class="weui-gallery__del">
          <i class="weui-icon-delete weui-icon_gallery-delete"></i>
        </a>
      </div>
    </div>
  </transition>
</template>
<script>
// 去仓库的数据
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      isShowGallery: false
    };
  },
  computed: {
    ...mapState({
      galleryState: state => state.galleryState
    })
  },
  methods: {
    ...mapActions(["setGalleryState"])
  }
};
</script>

<style scoped>
.weui-gallery-iop{
    position: fixed;
    top:0;
    right:0;
    left:0;
    bottom:0;
    background-color:#000;
    z-index: 1000;
}
.fade-enter-active,.fade-leave-active{
    transition: opacity 2s;
}
.fade-enter,.fade-leave-to {
    opacity: 0;
}
</style>