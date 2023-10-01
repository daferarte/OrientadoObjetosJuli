/**
 * @author Daniel Arteaga
 * 
 * Clase donde se inicia el servidor
 */


const Server = require('./models/server');
const server = new Server();

server.listen();
