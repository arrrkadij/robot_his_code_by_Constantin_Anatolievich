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
    var motor1;
    if (text.length == 9) {
        motor1 = text.substring(0, 3);
    }
    else if (text.length == 8) {
        if (text[0] == '-')
            motor1 = text.substring(0, 3);
        else
            motor2 = text.substring(0, 2);
    }
    else if (text.length == 7) {
        motor1 = text.substring(0, 2);
    }
    else
        motor1 = text[2];
    var motor2;
    if (text.length == 9) {
        motor2 = text.substring(5, 8);
    }
    else if (text.length == 8) {
        if (text[0] == '-')
            motor2 = text.substring(5, 7);
        else
            motor2 = text.substring(4, 7);
    }
    else if (text.length == 7) {
        motor2 = text.substring(4, 6);
    }
    else
        motor2 = text[2];
  Motor.SetSpeed(1, motor1);
  Motor.SetSpeed(2, motor2);
};

WebSocketServer.onclose=function (socket, code) {
  console.log(code + "\n");
};