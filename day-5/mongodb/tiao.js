const {
    insert,
    // find,
    // update,
    // remove
} = require("./db");

(async () => {
    // 添加
    await insert("mongn",{name:"qw"},{name:"as"});
    // // 查找
    // const result = await find("mongn");
    // console.log(result);
    // // 更改
    // await update("mongn", { name: "zs" }, { name: "iop" });
    // // 删除
    // await remove("mongn",{ name: "iop" });
})();