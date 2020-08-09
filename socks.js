var num = null;
var ws = null;
function websocket(url, data, callback) {
    //data 为传送的数据，请传递字符串
    //url 为ws链接，格式为 ws://47.97.197.74/iot_admin
    function reconnect(url) {
        var timer = setTimeout(function() {
            if (ws.readyState == 2 || ws.readyState == 3) {
                console.log("readyState" + ws.readyState);
                createwebSocket();
            } else if (ws.readyState == 1) {
                clearTimeout(timer);
            }
        },
        5000);

    }
    createwebSocket();
    function createwebSocket() {
        ws = new WebSocket(url);
        runwebsocket();
    };

    function runwebsocket() {
        ws.onopen = function() {
            console.log("连接已打开");
            ws.send(data);
        };
        ws.onmessage = function(evt) {
            var result = {
                status: 0,
                msg: "ok",
                data: evt.data
            }
            console.log("接收到数据",evt.data);
        };
        ws.onclose = function(e) {
            console.log("连接关闭");
            var result = {
                status: 1,
                msg: "close",
                data: e.code
            }
            reconnect(url);
        };
        ws.οnerrοr = function(e) {
            console.log("发生错误");
            var result = {
                status: 1,
                msg: "error",
                data: e.code
            }
        }
    }

};
function sendData(data) {
    ws.send(data);
}