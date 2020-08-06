function WebSocketTest()
{
   if ("WebSocket" in window)
   {
      // 打开一个 web socket
      var ws = new WebSocket("ws://127.0.0.1:80/echo");
      var  res
      ws.onopen = function()
      {
         // Web Socket 已连接上，使用 send() 方法发送数据
         ws.send("发送");
      };
         
      ws.onmessage = DealRecData; 
         
      ws.onclose = function()
      { 
         // 关闭 websocket
         alert("连接已关闭..."); 
      };

      return res;
   }
   
   else
   {
      // 浏览器不支持 WebSocket
      alert("您的浏览器不支持 WebSocket!");
   }
}
