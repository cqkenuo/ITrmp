var data="233"
var wsdata="ws://127.0.0.1:80/echo"
var callback = function(e){console.log(e,e.data)}
websocket(wsdata, data, callback)