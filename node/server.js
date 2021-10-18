// 引入http
var http = require("http");
// console.log(http);

// 创建服务器
// request 请求体 response 响应体
var server = http.createServer(function (request, response) {

    // 发送头部信息
    response.writeHead(200, {
        "Content-Type": "text/html" // 告诉浏览器应该用什么模式来响应代码
    });
    // 发送响应体
    // response.end("<h1>hello world</h1>");
    response.end(JSON.stringify({data:[1,2,3,4,5]}))
})
// 监听
server.listen(8080)