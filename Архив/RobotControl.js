import "cbot.dlm";


Cyberbot.Init();

WebSocket.init();

Motor.Init();

wait(1000);

WebSocketServer.onopen=function (socket, uri) {
  console.log(uri + "\n");
};

WebSocketServer.onmessage=function (socket, text) {
  console.log(text + "\n");
  Motor.SetSpeed(1, text);
  Motor.SetSpeed(2, text);
};

WebSocketServer.onclose=function (socket, code) {
  console.log(code + "\n");
};