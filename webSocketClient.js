const webSocket = require('ws');
socket = new webSocket('ws://localhost:8080');
socket.onmessage = (event) => {
    console.log('Server says: ', event.data);
}
;

socket.onopen = () => {
    console.log('Connected to WebSocket server');
    socket.send('Hello from client!');
}
;

socket.onclose = () => {
    console.log('Disconnected from WebSocket server');
}
;
