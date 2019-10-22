<template>
  <div>
    <keep-alive>
      <component :is="tabber"></component>
    </keep-alive>
  </div>
</template>

<script>

import Wechat from "../wechat/wechat.vue";
import Contact from "../contact/contact.vue";
import Rerover from "../rerover/rerover.vue";
import Win from "../win/win.vue";
import observer from "../../tool/observer";
export default {
  data() {
    return {
      // 默认微信第一个出现
      tabber: "Wechat"
    };
  },
  // 挂载之后运行
  mounted() {
    // 拿到tabber模块传递过来的索引值
    observer.on("setTabber", index => {
      switch (index) {
        // 索引值为0时，显示微信模块
        case 0:
          this.tabber = "Wechat";
          break;
        // 索引值为1时，显示通讯录模块
        case 1:
          this.tabber = "Contact";
          break;
        case 2:
          this.tabber = "Rerover";
          break;
        case 3:
          this.tabber = "Win";
          break;
      }
    });
  },
   components:{
    Wechat,
    Contact,
    Rerover,
    Win
  }
};
</script>