var test = 0;
var socket = new WebSocket("ws://192.168.4.1/ws");
    socket.onopen = function() {
        alert("Соединение установлено.");
      
         
        const customer = document.getElementById('customer');
        const strongLeft = document.getElementById('strongLeft');
        const freelancer = document.getElementById('freelancer');
        const strongRight = document.getElementById('strongRight');
        const softLeftForward = document.getElementById('softLeftForward');
        const softRightForward = document.getElementById('softRightForward');
        const softLeftBack = document.getElementById('softLeftBack');
        const softRightBack = document.getElementById('softRightBack');
        const stop = document.getElementById('stop');

            
        
        customer.addEventListener('click', () => {
            socket.send("900:900");
           });
        freelancer.addEventListener('click', () => {
            socket.send("-900:-900");
           });
        strongLeft.addEventListener('click', () => {
            socket.send("-500:500");
        });
        strongRight.addEventListener('click', () => {
            socket.send("500:-500");
        });
        softLeftForward.addEventListener('click', () => {
            socket.send("150:700");
        });
        softRightForward.addEventListener('click', () => {
            socket.send("700:150");
        });
        softLeftBack.addEventListener('click', () => {
            socket.send("-150:-700");
        });
        softRightBack.addEventListener('click', () => {
            socket.send("-700:-150");
        });
        stop.addEventListener('click', () => {
            socket.send("0:0");
        });
    };

      socket.onclose = function(event) {
        if (event.wasClean) {
          alert('Соединение закрыто чисто');
        } else {
          alert('Обрыв соединения'); // например, "убит" процесс сервера
        }
        alert('Код: ' + event.code + ' причина: ' + event.reason);
      };
      
      socket.onmessage = function(event) {
        alert("Получены данные " + event.data);
      };
      
      socket.onerror = function(error) {
        alert("Ошибка" + error.message);
      };

