const { Server } = require('ws');
 
// webserver
const sockserver = new Server({ port: 443 });
sockserver.on('connection', (ws) => {
   console.log('New client connected!'); 
   ws.on('close', () => console.log('Client has disconnected!'));
});

let companies = {"stock_price" : 425.0, "ticker_symbol": "26td", 
"category" : "Real Estate", "location" : "New York", "description": "New stock"}

setInterval(() => {
    sockserver.clients.forEach((client) => {
        const data = JSON.stringify(companies);
        client.send(data);
    });
 }, 10000);

