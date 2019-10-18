import Vue from 'vue/dist/vue'
import observer from '../../tool/observer'
export default Vue.component("eno-min", {
    data() {
        return {
            // 默认微信第一个出现
            tabber: "eno-wechat"
        }
    },
    // 放请求之后，拿到数据就保存，这样我在点击回去的就不需要在重新放请求拿数据了
    template: `
        <div>
            <keep-alive>
                <component :is="tabber"></component>
            </keep-alive>
        </div>
    `,
    // 挂载之后运行
    mounted() {
        // 拿到tabber模块传递过来的索引值
        observer.on("setTabber", (index) => {
            switch (index) {
                // 索引值为0时，显示微信模块
                case 0:
                    this.tabber = "eno-wechat";
                    break;
                    // 索引值为1时，显示通讯录模块
                case 1:
                    this.tabber = "eno-contact";
                    break;
                case 2:
                    this.tabber = "eno-rerover";
                    break;
                case 3:
                    this.tabber = "eno-win";
                    break;
                
            }
        })
    }
})