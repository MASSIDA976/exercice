const http = require('http');

const app = require('./app');

const numPort = 3004;

app.set("port", numPort);

const server = http.createServer(app);

const date = new Date();

server.listen(3004, () => {
    console.log(date.toLocaleDateString(), date.toLocaleTimeString(), "le serveur est activé au port :", numPort);
    console.log("Le serveur est activé au port :" ,numPort);
});