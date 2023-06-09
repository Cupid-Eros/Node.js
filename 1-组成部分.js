// 引入 required 模块：我们可以使用 require 指令来载入 Node.js 模块。
var http=require("http");

// 创建服务器：服务器可以监听客户端的请求，类似于 Apache 、Nginx 等 HTTP 服务器。

// http.createServer() 方法创建服务器，并使用 listen 方法绑定 8888 端口
http.createServer(function (request,response) {
    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200,{'Content-Type':'text/plain'});

    response.end('Hello world\n');
  }).listen(8888)

// 接收请求与响应请求 服务器很容易创建，客户端可以使用浏览器或终端发送 HTTP 请求，服务器接收请求后返回响应数据。
// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');