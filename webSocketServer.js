const webSocket = require('ws');

const wss = new webSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Client connected');
    ws.send(JSON.stringify({"message": "Hello, welcome to webSocket server!"}));
    ws.on('message', (message) => {
        console.log('Received: ' + message);
        setInterval(() => {
            const stockPrice = (Math.random() * 100).toFixed(2);
            wss.clients.forEach(client => {
                if (client.readyState === webSocket.OPEN) {
                    client.send(JSON.stringify({"stock": `AAPL: $${stockPrice}`}));
                }
            });
        }, 5000)
        
    });
    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

console.log('WebSocket server is running on ws://localhost:8080');