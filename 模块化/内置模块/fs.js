const fs = require("fs")
// gulp把文件读出来，然后修改，最后再写回去
// 读取文件
function readFile() {
    return new Promise((resolve, reject) => {
        fs.readFile("./index.js", (err, data) => {
            if (err) throw err;
            // 以二进制的方式读取出来
            let code = data.toString();
            // 正则匹配所有的console.log然后不写入另一个文件里面
            let output = code
                .replace(/console.log\([a-z0-9'"]+\)/g, "")
                // 修改变量const成var
                .replace(/const/g,"var")
            console.log(output)
            // 把结果传给writeFile
            resolve(output)
        })
    })
}

// 把index.js文件里面的内容，写入output.js里面。
function writeFile(output) {
    // 要写入的文件路径，
    fs.writeFile("./output.js",output, (err) => {
        if (err) throw err;
        console.log("写入成功");
    })
}


; (async() => {
    let output = await readFile()
    await writeFile(output)
})()