// 用es6的方法写
class Observer{
    // 这里放的是实例成员
    constructor() {
        this.list = {};
    }
    // 这里是原型链上的
    on(key, fn) {
        if (!this.list[key]) {
            this.list[key] = [];
        }
        this.list[key].push(fn);
    }
    emit(key, param) {
        let fns = this.list[key];
        if (!fns || fns.length === 0) {
            return false;
        }
        fns.forEach(fn => {
            fn(param);
        });
    };
}
export default new Observer()