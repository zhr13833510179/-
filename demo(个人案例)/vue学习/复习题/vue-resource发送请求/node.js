//导入 http 内置模块
const http = require('http')

// 创建一个 http 服务器
const server = http.createServer()
// 监听 http 服务器的 request请求
server.on('request', function(req, res){
    const url = req.url;

    if(url === '/getscript'){
        // 拼接一个合法的js脚本,这里拼接的是一个方法的调用
        var scriptstr = 'show()'
        // res.end 是发送给 客户端, 客户端去把 这个 字符串,当作js代码去解析执行
        res.end(scriptstr)
    } else{
        res.end('404')
    }
})

// 指定端口号并启动服务器监听
server.listen(3000, function() {
    console.log('server listen at http://127.0.0.1:3000')
})