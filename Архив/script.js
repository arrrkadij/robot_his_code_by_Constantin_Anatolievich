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

            
        
            customer.addEventListener('click', () => {
                socket.send(1000);
            });
            freelancer.addEventListener('click', () => {
                socket.send(-1000);
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

